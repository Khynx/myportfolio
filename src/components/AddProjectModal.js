import React, { useState } from 'react';
import './AddProjectModal.css';

export default function AddProjectModal({ isOpen, onClose, onAddProject }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    technologies: '',
    imageFile: null,
    imagePreview: null,
    liveUrl: '',
    githubUrl: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert('Image size must be less than 5MB');
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({
          ...prev,
          imageFile: file,
          imagePreview: reader.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.title.trim() || !formData.description.trim()) {
      alert('Please fill in all required fields');
      return;
    }

    const newProject = {
      id: Date.now(),
      title: formData.title.trim(),
      description: formData.description.trim(),
      technologies: formData.technologies.split(',').map(tech => tech.trim()).filter(t => t),
      imageUrl: formData.imagePreview || 'https://via.placeholder.com/400x300?text=Project',
      liveUrl: formData.liveUrl.trim(),
      githubUrl: formData.githubUrl.trim()
    };

    onAddProject(newProject);
    setFormData({
      title: '',
      description: '',
      technologies: '',
      imageFile: null,
      imagePreview: null,
      liveUrl: '',
      githubUrl: ''
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Add New Project</h2>
          <button className="close-btn" onClick={onClose}>&times;</button>
        </div>

        <form onSubmit={handleSubmit} className="project-form">
          <div className="form-group">
            <label>Project Title *</label>
            <input
              type="text"
              name="title"
              placeholder="Enter project title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Description *</label>
            <textarea
              name="description"
              placeholder="Describe your project"
              rows="4"
              value={formData.description}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div className="form-group">
            <label>Technologies (comma-separated)</label>
            <input
              type="text"
              name="technologies"
              placeholder="React, Node.js, MongoDB, etc."
              value={formData.technologies}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Project Image *</label>
            <div className="image-upload-wrapper">
              <input
                type="file"
                id="imageFile"
                accept="image/*"
                onChange={handleImageChange}
              />
              <label htmlFor="imageFile" className="file-label">
                📁 Click to select image from PC
              </label>
            </div>
            {formData.imagePreview && (
              <div className="image-preview">
                <img src={formData.imagePreview} alt="Preview" />
                <p className="file-name">{formData.imageFile?.name}</p>
              </div>
            )}
          </div>

          <div className="form-group">
            <label>Live Demo URL</label>
            <input
              type="url"
              name="liveUrl"
              placeholder="https://your-project.com"
              value={formData.liveUrl}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>GitHub URL</label>
            <input
              type="url"
              name="githubUrl"
              placeholder="https://github.com/username/project"
              value={formData.githubUrl}
              onChange={handleChange}
            />
          </div>

          <div className="modal-actions">
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              Add Project
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
