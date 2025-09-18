import React, { useState, useEffect } from 'react';
import './AdminPanel.css';
import * as XLSX from "xlsx";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminPanel = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginForm, setLoginForm] = useState({
    Email: '',
    Password: ''
  });
  const [loginError, setLoginError] = useState('');
  const [loginLoading, setLoginLoading] = useState(false);
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState('postJob');
  const [jobs, setJobs] = useState([]);
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(false);
  const [appLoading, setAppLoading] = useState(false);
  const [editingJob, setEditingJob] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedApplication, setSelectedApplication] = useState(null);
  const [showApplicationDetail, setShowApplicationDetail] = useState(false);
  const [showStatusModal, setShowStatusModal] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState('');
  const [selectedApplicationId, setSelectedApplicationId] = useState(null);
  
  // Form state for posting a job
  const [jobForm, setJobForm] = useState({
    Title: '',
    Description: '',
    Requirement: '',
    Skills: '',
    Experience: '',
    JobType: 'Full-Time',
    EmploymentMode: 'Hybrid',
    Location: '',
    SalaryRange: '',
    ApplicationLink: '',
    ApplicationDeadline: '',
    Status: 'Active'
  });

  // Form state for status update with interview details
  const [statusForm, setStatusForm] = useState({
    Status: 'Shortlisted',
    InterviewDate: '',
    InterviewTime: '',
    InterviewMode: 'Online',
    InterviewLinkOrVenue: ''
  });

  // Check if user is already logged in (from localStorage)
  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  // Handle login form changes
  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginForm({
      ...loginForm,
      [name]: value
    });
  };

  // Handle login submission
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginLoading(true);
    setLoginError('');

    try {
      const response = await axios.post('https://website-backend-6shb.onrender.com/api/admin/login', loginForm);
      
      if (response.data.success) {
        // Store token in localStorage
        console.log(response)
        // localStorage.setItem('adminToken', response.data.token);
      } else {
        setIsLoggedIn(true);
        console.log(response)
        localStorage.setItem('adminToken', response.data.token);
        setLoginError(response.data.message || 'Login failed');
      }
    } catch (error) {
      console.error('Login error:', error);
      setLoginError(error.response?.data?.message || 'Invalid email or password');
    } finally {
      setLoginLoading(false);
    }
  };

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    setIsLoggedIn(false);
    setLoginForm({
      Email: '',
      Password: ''
    });
  };

  // Fetch jobs from API
  const fetchJobs = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem('adminToken');
      const response = await axios.get('https://website-backend-6shb.onrender.com/api/job', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setJobs(response.data);
    } catch (error) {
      console.error('Error fetching jobs:', error);
      if (error.response?.status === 401) {
        handleLogout();
      }
    } finally {
      setLoading(false);
    }
  };

  // Fetch applications from API
  const fetchApplications = async () => {
    setAppLoading(true);
    try {
      const token = localStorage.getItem('adminToken');
      const response = await axios.get('https://website-backend-6shb.onrender.com/api/applications', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setApplications(response.data);
    } catch (error) {
      console.error('Error fetching applications:', error);
      if (error.response?.status === 401) {
        handleLogout();
      }
    } finally {
      setAppLoading(false);
    }
  };

  // Handle tab change to fetch data when needed
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    
    // Fetch applications when switching to the applications tab
    if (tab === 'manageApplications') {
      fetchApplications();
    }
    
    // Fetch jobs when switching to the manage jobs tab
    if (tab === 'manageJobs') {
      fetchJobs();
    }
  };

  // Handle form changes
  const handleJobFormChange = (e) => {
    const { name, value } = e.target;
    setJobForm({
      ...jobForm,
      [name]: value
    });
  };

  // Handle status form changes
  const handleStatusFormChange = (e) => {
    const { name, value } = e.target;
    setStatusForm({
      ...statusForm,
      [name]: value
    });
  };

  // Handle job editing
  const handleEditJob = (job) => {
    setIsEditing(true);
    setEditingJob(job);
    
    // Pre-fill the form with the job data
    setJobForm({
      Title: job.Title || '',
      Description: job.Description || '',
      Requirement: job.Requirement || '',
      Skills: job.Skills ? job.Skills.join(", ") : '',
      Experience: job.Experience || '',
      JobType: job.JobType || 'Full-Time',
      EmploymentMode: job.EmploymentMode || 'Hybrid',
      Location: job.Location || '',
      SalaryRange: job.SalaryRange || '',
      ApplicationLink: job.ApplicationLink || '',
      ApplicationDeadline: job.ApplicationDeadline ? job.ApplicationDeadline.slice(0, 16) : '',
      Status: job.Status || 'Active'
    });
    
    // Switch to the post job tab
    setActiveTab('postJob');
  };

  // Handle job update
  const handleUpdateJob = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Prepare skills array from comma-separated string
    const jobData = {
      ...jobForm,
      Skills: jobForm.Skills.split(",").map((skill) => skill.trim()),
      Experience: parseInt(jobForm.Experience),
    };

    try {
      const token = localStorage.getItem('adminToken');
      const response = await axios.put(`https://website-backend-6shb.onrender.com/api/job/${editingJob.JobId}`, jobData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      
      // Update the jobs list with the updated job
      setJobs(jobs.map(job => job.JobId === editingJob.JobId ? response.data : job));
      
      // Reset form and editing state
      setJobForm({
        Title: "",
        Description: "",
        Requirement: "",
        Skills: "",
        Experience: "",
        JobType: "Full-Time",
        EmploymentMode: "Hybrid",
        Location: "",
        SalaryRange: "",
        ApplicationLink: "",
        ApplicationDeadline: "",
        Status: "Active",
      });
      
      setEditingJob(null);
      setIsEditing(false);
      
      alert("Job updated successfully!");
    } catch (error) {
      console.error("Error updating job:", error);
      if (error.response?.status === 401) {
        handleLogout();
      } else {
        alert("Error updating job");
      }
    } finally {
      setLoading(false);
    }
  };

  // Handle job submission
  const handlePostJob = async (e) => {
    e.preventDefault();
    
    if (isEditing) {
      handleUpdateJob(e);
      return;
    }
    
    setLoading(true);

    // Prepare skills array from comma-separated string
    const jobData = {
      ...jobForm,
      Skills: jobForm.Skills.split(",").map((skill) => skill.trim()),
      Experience: parseInt(jobForm.Experience),
    };

    try {
      const token = localStorage.getItem('adminToken');
      const response = await axios.post("https://website-backend-6shb.onrender.com/api/job", [jobData], {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      const newJob = response.data;
      setJobs([...jobs, newJob]);

      // Reset form
      setJobForm({
        Title: "",
        Description: "",
        Requirement: "",
        Skills: "",
        Experience: "",
        JobType: "Full-Time",
        EmploymentMode: "Hybrid",
        Location: "",
        SalaryRange: "",
        ApplicationLink: "",
        ApplicationDeadline: "",
        Status: "Active",
      });
    
      alert("Job posted successfully!");
    } catch (error) {
      console.error("Error posting job:", error);
      if (error.response?.status === 401) {
        handleLogout();
      } else {
        alert("Error posting job");
      }
    } finally {
      setLoading(false);
    }
  };

  // Handle job deletion
  const handleDeleteJob = async (id) => {
    if (!window.confirm("Are you sure you want to delete this job?")) return;

    try {
      const token = localStorage.getItem('adminToken');
      await axios.delete(`https://website-backend-6shb.onrender.com/api/job/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setJobs(jobs.filter((job) => job.JobId !== id));
      alert("Job deleted successfully!");
    } catch (error) {
      console.error("Error deleting job:", error);
      if (error.response?.status === 401) {
        handleLogout();
      } else {
        alert("Error deleting job");
      }
    }
  };

  // Open status update modal
  const handleOpenStatusModal = (applicationId, status) => {
    setSelectedApplicationId(applicationId);
    setSelectedStatus(status);
    
    // Reset form with default values
    setStatusForm({
      Status: status,
      InterviewDate: '',
      InterviewTime: '',
      InterviewMode: 'Online',
      InterviewLinkOrVenue: ''
    });
    
    setShowStatusModal(true);
  };

  // Handle application status update
  const handleUpdateApplicationStatus = async (e) => {
    e.preventDefault();
    
    try {
      const token = localStorage.getItem('adminToken');
      
      // Prepare the data to send
      const requestData = {
        Status: statusForm.Status
      };
      
      // Only include interview details if status is Shortlisted
      if (statusForm.Status === 'Shortlisted') {
        requestData.InterviewDate = statusForm.InterviewDate;
        requestData.InterviewTime = statusForm.InterviewTime;
        requestData.InterviewMode = statusForm.InterviewMode;
        requestData.InterviewLinkOrVenue = statusForm.InterviewLinkOrVenue;
      }
      
      await axios.patch(`https://website-backend-6shb.onrender.com/api/applications/${selectedApplicationId}/status`, 
        requestData, 
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      
      // Update the applications list with the updated status
      setApplications(applications.map(app => 
        app.ApplicationId === selectedApplicationId ? {...app, Status: statusForm.Status} : app
      ));
      
      // Also update the selected application if it's the one being updated
      if (selectedApplication && selectedApplication.ApplicationId === selectedApplicationId) {
        setSelectedApplication({...selectedApplication, Status: statusForm.Status});
      }
      
      alert(`Application ${statusForm.Status.toLowerCase()} successfully!`);
      setShowStatusModal(false);
    } catch (error) {
      console.error("Error updating application status:", error);
      if (error.response?.status === 401) {
        handleLogout();
      } else {
        alert("Error updating application status");
      }
    }
  };

  // Handle view application details
  const handleViewApplication = (application) => {
    setSelectedApplication(application);
    setShowApplicationDetail(true);
  };

  // Handle download resume
  const handleDownloadResume = async (applicationId) => {
    try {
      // Show loading state if needed
      setAppLoading(true);
      
      const token = localStorage.getItem('adminToken');
      // Make API call to download resume
      const response = await axios.get(
        `https://website-backend-6shb.onrender.com/api/applications/applicationid/${applicationId}/download-resume`,
        {
          responseType: 'blob', // Important for file downloads
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      
      // Create a blob from the response data
      const blob = new Blob([response.data], {
        type: response.headers['content-type']
      });
      
      // Create a URL for the blob
      const url = window.URL.createObjectURL(blob);
      
      // Create a temporary anchor element to trigger download
      const link = document.createElement('a');
      link.href = url;
      
      // Extract filename from content-disposition header if available
      const contentDisposition = response.headers['content-disposition'];
      let fileName = 'resume.pdf'; // Default filename
      
      if (contentDisposition) {
        const fileNameMatch = contentDisposition.match(/filename="?(.+)"?/);
        if (fileNameMatch.length === 2) {
          fileName = fileNameMatch[1];
        }
      }
      
      link.setAttribute('download', fileName);
      document.body.appendChild(link);
      link.click();
      
      // Clean up
      link.remove();
      window.URL.revokeObjectURL(url);
      
    } catch (error) {
      console.error('Error downloading resume:', error);
      if (error.response?.status === 401) {
        handleLogout();
      } else {
        alert('Error downloading resume. Please try again.');
      }
    } finally {
      setAppLoading(false);
    }
  };

  // Export applications to Excel
  const exportToExcel = () => {
    if (applications.length === 0) {
      alert('No applications to export');
      return;
    }

    const worksheet = XLSX.utils.json_to_sheet(applications);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Applications');
    XLSX.writeFile(workbook, 'applications.xlsx');
  };

  // Render Status Update Modal
  const renderStatusModal = () => {
    if (!showStatusModal) return null;
    
    return (

      <div className="status-modal-overlay">
  <div className="status-modal-box container">
    <div className="status-modal-header">
      <h2>Update Application Status</h2>
      <button 
        className="status-close-btn"
        onClick={() => setShowStatusModal(false)}
      >
        &times;
      </button>
    </div>
    
    <form onSubmit={handleUpdateApplicationStatus}>
      <div className="status-form-group">
        <label>Status *</label>
        <select
          name="Status"
          value={statusForm.Status}
          onChange={handleStatusFormChange}
          required
        >
          <option value="">Select Status</option>
          <option value="Shortlisted">Shortlisted</option>
          <option value="Rejected">Rejected</option>
          <option value="Pending">Pending</option>
        </select>
      </div>
      
      {statusForm.Status === 'Shortlisted' && (
        <>
          <div className="status-form-row">
            <div className="status-form-group">
              <label>Interview Date *</label>
              <input
                type="date"
                name="InterviewDate"
                value={statusForm.InterviewDate}
                onChange={handleStatusFormChange}
                required
              />
            </div>
            <div className="status-form-group">
              <label>Interview Time *</label>
              <input
                type="time"
                name="InterviewTime"
                value={statusForm.InterviewTime}
                onChange={handleStatusFormChange}
                required
              />
            </div>
          </div>
          
          <div className="status-form-group">
            <label>Interview Mode *</label>
            <select
              name="InterviewMode"
              value={statusForm.InterviewMode}
              onChange={handleStatusFormChange}
              required
            >
              <option value="Online">Online</option>
              <option value="In-Person">In-Person</option>
              <option value="Phone">Phone</option>
            </select>
          </div>
          
          <div className="status-form-group">
            <label>
              {statusForm.InterviewMode === 'Online' 
                ? 'Interview Link *' 
                : 'Venue Details *'}
            </label>
            <input
              type="text"
              name="InterviewLinkOrVenue"
              value={statusForm.InterviewLinkOrVenue}
              onChange={handleStatusFormChange}
              placeholder={
                statusForm.InterviewMode === 'Online' 
                  ? 'https://meet.google.com/xxx-xxxx-xxx' 
                  : 'Office address, floor, room number, etc.'
              }
              required
            />
          </div>
        </>
      )}
      
      <div className="status-modal-actions">
        <button 
          type="button" 
          className="status-cancel-btn"
          onClick={() => setShowStatusModal(false)}
        >
          Cancel
        </button>
        <button 
          type="submit" 
          className="status-submit-btn"
        >
          Update Status
        </button>
      </div>
    </form>
  </div>
</div>

    );
  };

  // Render Login Form
  const renderLoginForm = () => (
    <div className="login-container">
      <div className="login-form">
        <h2>Admin Login</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="Email"
              value={loginForm.Email}
              onChange={handleLoginChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="Password"
              value={loginForm.Password}
              onChange={handleLoginChange}
              required
            />
          </div>
          {loginError && <div className="error-message">{loginError}</div>}
          <button type="submit" className="submit-btn" disabled={loginLoading}>
            {loginLoading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );

  // Render Post Job form
  const renderPostJobForm = () => (
    <div className="tab-content">
      <h2>{isEditing ? 'Edit Job' : 'Post a New Job'}</h2>
      <form onSubmit={handlePostJob} className="job-form">
        <div className="form-row">
          <div className="form-group">
            <label>Job Title *</label>
            <input
              type="text"
              name="Title"
              value={jobForm.Title}
              onChange={handleJobFormChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Location *</label>
            <input
              type="text"
              name="Location"
              value={jobForm.Location}
              onChange={handleJobFormChange}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label>Job Description *</label>
          <textarea
            name="Description"
            value={jobForm.Description}
            onChange={handleJobFormChange}
            rows="4"
            required
          ></textarea>
        </div>

        <div className="form-group">
          <label>Requirements *</label>
          <textarea
            name="Requirement"
            value={jobForm.Requirement}
            onChange={handleJobFormChange}
            rows="3"
            required
          ></textarea>
        </div>

        <div className="form-group">
          <label>Skills (comma separated) *</label>
          <input
            type="text"
            name="Skills"
            value={jobForm.Skills}
            onChange={handleJobFormChange}
            placeholder="e.g. Node.js, React, MongoDB"
            required
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Experience (years) *</label>
            <input
              type="number"
              name="Experience"
              value={jobForm.Experience}
              onChange={handleJobFormChange}
              min="0"
              required
            />
          </div>
          <div className="form-group">
            <label>Job Type *</label>
            <select
              name="JobType"
              value={jobForm.JobType}
              onChange={handleJobFormChange}
              required
            >
              <option value="Full-Time">Full-Time</option>
              <option value="Part-Time">Part-Time</option>
              <option value="Contract">Contract</option>
              <option value="Internship">Internship</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Employment Mode *</label>
            <select
              name="EmploymentMode"
              value={jobForm.EmploymentMode}
              onChange={handleJobFormChange}
              required
            >
              <option value="On-Site">On-Site</option>
              <option value="Remote">Remote</option>
              <option value="Hybrid">Hybrid</option>
            </select>
          </div>
          <div className="form-group">
            <label>Salary Range *</label>
            <input
              type="text"
              name="SalaryRange"
              value={jobForm.SalaryRange}
              onChange={handleJobFormChange}
              placeholder="e.g. 9-13 LPA"
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Application Link *</label>
            <input
              type="url"
              name="ApplicationLink"
              value={jobForm.ApplicationLink}
              onChange={handleJobFormChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Application Deadline *</label>
            <input
              type="datetime-local"
              name="ApplicationDeadline"
              value={jobForm.ApplicationDeadline}
              onChange={handleJobFormChange}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label>Status *</label>
          <select
            name="Status"
            value={jobForm.Status}
            onChange={handleJobFormChange}
            required
          >
            <option value="Active">Active</option>
            <option value="Draft">Draft</option>
            <option value="Closed">Closed</option>
          </select>
        </div>

        <button type="submit" className="submit-btn" disabled={loading}>
          {loading ? (isEditing ? 'Updating...' : 'Posting...') : (isEditing ? 'Update Job' : 'Post Job')}
        </button>
        
        {isEditing && (
          <button 
            type="button" 
            className="cancel-btn"
            onClick={() => {
              setIsEditing(false);
              setEditingJob(null);
              setJobForm({
                Title: "",
                Description: "",
                Requirement: "",
                Skills: "",
                Experience: "",
                JobType: "Full-Time",
                EmploymentMode: "Hybrid",
                Location: "",
                SalaryRange: "",
                ApplicationLink: "",
                ApplicationDeadline: "",
                Status: "Active",
              });
            }}
          >
            Cancel Edit
          </button>
        )}
      </form>
    </div>
  );

  // Render Manage Jobs section
  const renderManageJobs = () => (
    <div className="tab-content">
      <div className="section-header">
        <h2>Manage Jobs</h2>
        <button className="btn-refresh" onClick={fetchJobs} disabled={loading}>
          <i className="fas fa-sync-alt"></i> Refresh
        </button>
      </div>
      
      {loading ? (
        <div className="loading">Loading jobs...</div>
      ) : jobs.length > 0 ? (
        <div className="jobs-list">
          {jobs.map(job => (
            <div key={job.JobId} className="job-card">
              <div className="job-header">
                <h3>{job.Title}</h3>
                <span className={`status-badge ${job.Status}`}>
                  {job.Status}
                </span>
              </div>
              <div className="job-details">
                <p><i className="fas fa-map-marker-alt"></i> {job.Location}</p>
                <p><i className="fas fa-briefcase"></i> {job.JobType} • {job.EmploymentMode}</p>
                <p><i className="fas fa-money-bill-wave"></i> {job.SalaryRange}</p>
                <p><i className="fas fa-hourglass-half"></i> {job.Experience} years experience</p>
                <p><i className="fas fa-calendar-times"></i> Apply by: {new Date(job.ApplicationDeadline).toLocaleDateString()}</p>
              </div>
              <div className="job-skills">
                {job.Skills && job.Skills.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
              <div className="job-actions">
                <button 
                  className="btn-edit" 
                  onClick={() => handleEditJob(job)}
                >
                  Edit
                </button>
                <button 
                  className="btn-delete"
                  onClick={() => handleDeleteJob(job.JobId)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <i className="fas fa-briefcase"></i>
          <p>No jobs posted yet</p>
        </div>
      )}
    </div>
  );

  // Render Application Detail Modal
  const renderApplicationDetail = () => {
    if (!selectedApplication) return null;
    
    return (
      <div className="modal-overlay">
        <div className="modal-content application-detail-modal">
          <div className="modal-header">
            <h2 className='text-dark'>Application Details</h2>
            <button 
              className="close-btn"
              onClick={() => setShowApplicationDetail(false)}
            >
              &times;
            </button>
          </div>
          
          <div className="applicant-info">
            <div className="applicant-header">
              <h3 className='text-dark'>{selectedApplication.ApplicantName}</h3>
              <span className={`status-badge ${selectedApplication.Status}`}>
                {selectedApplication.Status}
              </span>
            </div>
            
            <div className="applicant-details">
              <div className="detail-row">
                <div className="detail-item">
                  <label>Email:</label>
                  <span>{selectedApplication.Email}</span>
                </div>
                <div className="detail-item">
                  <label>Phone:</label>
                  <span>{selectedApplication.PhoneNumber}</span>
                </div>
              </div>
              
              <div className="detail-row">
                <div className="detail-item">
                  <label>Experience:</label>
                  <span>{selectedApplication.Experience} years</span>
                </div>
                <div className="detail-item">
                  <label>Location:</label>
                  <span>{selectedApplication.Location}</span>
                </div>
              </div>
              
              <div className="detail-row">
                <div className="detail-item">
                  <label>Willing to relocate:</label>
                  <span>{selectedApplication.WillingToRelocate ? 'Yes' : 'No'}</span>
                </div>
              </div>
              
              {selectedApplication.LinkedIn && (
                <div className="detail-item">
                  <label>LinkedIn:</label>
                  <a href={selectedApplication.LinkedIn} target="_blank" rel="noopener noreferrer" className='text-dark'>
                    {selectedApplication.LinkedIn}
                  </a>
                </div>
              )}
              
              {selectedApplication.GitHub && (
                <div className="detail-item">
                  <label>GitHub:</label>
                  <a href={selectedApplication.GitHub} target="_blank" rel="noopener noreferrer" className='text-dark'>
                    {selectedApplication.GitHub}
                  </a>
                </div>
              )}
              
              {selectedApplication.Portfolio && (
                <div className="detail-item">
                  <label>Portfolio:</label>
                  <a href={selectedApplication.Portfolio} target="_blank" rel="noopener noreferrer" className='text-dark'>
                    {selectedApplication.Portfolio}
                  </a>
                </div>
              )}
              
              <div className="detail-item">
                <label>Skills:</label>
                <div className="skills-list">
                  {selectedApplication.Skills && selectedApplication.Skills.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
              
              {selectedApplication.CoverLetter && (
                <div className="detail-item">
                  <label>Cover Letter:</label>
                  <div className="cover-letter">
                    {selectedApplication.CoverLetter}
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <div className="modal-actions">
            <button 
              className="btn-download"
              onClick={() => handleDownloadResume(selectedApplication.ApplicationId)}
              disabled={appLoading}
            >
              <i className="fas fa-download"></i> 
              {appLoading ? 'Downloading...' : 'Download Resume'}
            </button>
            
            <div className="status-actions">
              <button 
                className="btn-accept"
                onClick={() => handleOpenStatusModal(selectedApplication.ApplicationId, 'Shortlisted')}
                disabled={selectedApplication.Status === 'Shortlisted'}
              >
                <i className="fas fa-check"></i> Accept
              </button>
              <button 
                className="btn-reject"
                onClick={() => handleOpenStatusModal(selectedApplication.ApplicationId, 'Rejected')}
                disabled={selectedApplication.Status === 'Rejected'}
              >
                <i className="fas fa-times"></i> Reject
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Render Manage Applications section
  const renderManageApplications = () => (
    <div className="tab-content">
      <div className="section-header">
        <h2>Manage Applications</h2>
        <div className='d-flex gap-2'>
          <button className="btn-refresh" onClick={fetchApplications} disabled={appLoading}>
            <i className="fas fa-sync-alt"></i> Refresh
          </button>
          <button className="btn-export" onClick={exportToExcel}>
            <i className="fas fa-file-export"></i> Export to Excel
          </button>
        </div>
      </div>
      
      {appLoading ? (
        <div className="loading">Loading applications...</div>
      ) : applications.length > 0 ? (
        <div className="applications-table">
          <table>
            <thead>
              <tr>
                <th>Applicant Name</th>
                <th>Email</th>
                <th>Position</th>
                <th>Applied Date</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {applications.map(app => (
                <tr key={app.ApplicationId}>
                  <td>{app.ApplicantName}</td>
                  <td>{app.Email}</td>
                  <td>{app.Job?.Title}</td>
                  <td>{app.createdAt ? new Date(app.createdAt).toLocaleDateString() : 'N/A'}</td>
                  <td>
                    <span className={`status-badge ${app.Status.toLowerCase()}`}>
                      {app.Status}
                    </span>
                  </td>
                  <td>
                    <div className="action-buttons">
                      <button 
                        className="btn-view"
                        onClick={() => handleViewApplication(app)}
                      >
                        <i className="fas fa-eye"></i> View
                      </button>
                      <button 
                        className="btn-status"
                        onClick={() => handleOpenStatusModal(app.ApplicationId, app.Status)}
                      >
                        <i className="fas fa-edit"></i> Update Status
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="empty-state">
          <i className="fas fa-file-alt"></i>
          <p>No applications received yet</p>
        </div>
      )}
      
      {showApplicationDetail && renderApplicationDetail()}
      {renderStatusModal()}
    </div>
  );

  // Render Admin Panel
  const renderAdminPanel = () => (
    <div className="admin-panel">
      <header className="admin-header">
        <h1>Career Portal Admin</h1>
        <div className="user-info">
          <span>Welcome, Admin</span>
          <button className="logout-btn" onClick={handleLogout}>
            <i className="fas fa-sign-out-alt"></i> Logout
          </button>
          <div className="avatar">A</div>
        </div>
      </header>
      
      <div className="admin-container">
        <nav className="admin-sidebar">
          <ul>
            <li className={activeTab === 'postJob' ? 'active' : ''}>
              <button onClick={() => handleTabChange('postJob')}>
                <i className="fas fa-plus-circle"></i> Post Job
              </button>
            </li>
            <li className={activeTab === 'manageJobs' ? 'active' : ''}>
              <button onClick={() => handleTabChange('manageJobs')}>
                <i className="fas fa-briefcase"></i> Manage Jobs
              </button>
            </li>
            <li className={activeTab === 'manageApplications' ? 'active' : ''}>
              <button onClick={() => handleTabChange('manageApplications')}>
                <i className="fas fa-file-alt"></i> Applications
              </button>
            </li>
          </ul>
        </nav>
        
        <main className="admin-main">
          {activeTab === 'postJob' && renderPostJobForm()}
          {activeTab === 'manageJobs' && renderManageJobs()}
          {activeTab === 'manageApplications' && renderManageApplications()}
        </main>
      </div>
    </div>
  );

  return (
    <div>
      {isLoggedIn ? renderAdminPanel() : renderLoginForm()}
    </div>
  );
};

export default AdminPanel;