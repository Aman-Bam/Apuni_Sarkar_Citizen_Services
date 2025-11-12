import { useState } from 'react'
import { Plus, Search, Filter, Eye, Clock, CheckCircle, AlertCircle, MessageSquare } from 'lucide-react'
import { grievances } from '../data/sampleData'

const Grievances = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [serviceFilter, setServiceFilter] = useState('all')
  const [showForm, setShowForm] = useState(false)
  const [selectedGrievance, setSelectedGrievance] = useState(null)
  const [newGrievance, setNewGrievance] = useState({
    serviceType: '',
    complaint: '',
    citizenName: '',
    contactNumber: '',
    location: ''
  })

  const statusOptions = [
    { value: 'all', label: 'All Status', icon: Filter },
    { value: 'Pending', label: 'Pending', icon: AlertCircle, color: 'text-orange-600' },
    { value: 'In Progress', label: 'In Progress', icon: Clock, color: 'text-blue-600' },
    { value: 'Resolved', label: 'Resolved', icon: CheckCircle, color: 'text-green-600' }
  ]

  const serviceOptions = [
    { value: 'all', label: 'All Services' },
    { value: 'Housing', label: 'Housing' },
    { value: 'Employment', label: 'Employment' },
    { value: 'Health', label: 'Health' },
    { value: 'Education', label: 'Education' }
  ]

  const filteredGrievances = grievances.filter(grievance => {
    const matchesSearch = grievance.complaint.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         grievance.citizenName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         grievance.id.toString().includes(searchTerm)
    const matchesStatus = statusFilter === 'all' || grievance.status === statusFilter
    const matchesService = serviceFilter === 'all' || grievance.serviceType === serviceFilter
    return matchesSearch && matchesStatus && matchesService
  })

  const handleSubmitGrievance = (e) => {
    e.preventDefault()
    // In a real app, this would send to backend
    const grievance = {
      id: grievances.length + 1,
      ...newGrievance,
      status: 'Pending',
      submissionDate: new Date().toISOString().split('T')[0],
      sentiment: 'Neutral', // Default sentiment
      feedback: 'New grievance submitted'
    }
    // Add to local state (in real app, update from API)
    setNewGrievance({
      serviceType: '',
      complaint: '',
      citizenName: '',
      contactNumber: '',
      location: ''
    })
    setShowForm(false)
    alert('Grievance submitted successfully! Your reference ID is: ' + grievance.id)
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Pending': return <AlertCircle className="w-4 h-4 text-orange-600" />
      case 'In Progress': return <Clock className="w-4 h-4 text-blue-600" />
      case 'Resolved': return <CheckCircle className="w-4 h-4 text-green-600" />
      default: return null
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'Pending': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200'
      case 'In Progress': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
      case 'Resolved': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
    }
  }

  return (
    <div className="space-y-6">
      {/* Header with Add Button */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Grievance Management</h2>
          <p className="text-gray-600 dark:text-gray-400">Track and manage citizen grievances</p>
        </div>
        <button
          onClick={() => setShowForm(true)}
          className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span>Submit New Grievance</span>
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search grievances..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
            />
          </div>

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
          >
            {statusOptions.map(option => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>

          <select
            value={serviceFilter}
            onChange={(e) => setServiceFilter(e.target.value)}
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
          >
            {serviceOptions.map(option => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>

          <div className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
            Showing {filteredGrievances.length} of {grievances.length} grievances
          </div>
        </div>
      </div>

      {/* Grievances List */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Service</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Complaint</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Submitted</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Days</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {filteredGrievances.slice(0, 50).map((grievance) => (
                <tr key={grievance.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    #{grievance.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    {grievance.serviceType}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-white max-w-xs truncate">
                    {grievance.complaint}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(grievance.status)}`}>
                      {getStatusIcon(grievance.status)}
                      <span>{grievance.status}</span>
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    {new Date(grievance.submissionDate).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    {grievance.daysToResolve || '-'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button
                      onClick={() => setSelectedGrievance(grievance)}
                      className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300 flex items-center space-x-1"
                    >
                      <Eye className="w-4 h-4" />
                      <span>View</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* New Grievance Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg max-w-md w-full">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Submit New Grievance</h3>
                <button
                  onClick={() => setShowForm(false)}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                >
                  ✕
                </button>
              </div>

              <form onSubmit={handleSubmitGrievance} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Service Type
                  </label>
                  <select
                    value={newGrievance.serviceType}
                    onChange={(e) => setNewGrievance({...newGrievance, serviceType: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    required
                  >
                    <option value="">Select Service</option>
                    {serviceOptions.slice(1).map(option => (
                      <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Complaint Description
                  </label>
                  <textarea
                    value={newGrievance.complaint}
                    onChange={(e) => setNewGrievance({...newGrievance, complaint: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    rows="3"
                    placeholder="Describe your complaint in detail..."
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      value={newGrievance.citizenName}
                      onChange={(e) => setNewGrievance({...newGrievance, citizenName: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Contact Number
                    </label>
                    <input
                      type="tel"
                      value={newGrievance.contactNumber}
                      onChange={(e) => setNewGrievance({...newGrievance, contactNumber: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Location
                  </label>
                  <input
                    type="text"
                    value={newGrievance.location}
                    onChange={(e) => setNewGrievance({...newGrievance, location: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    placeholder="City/District"
                    required
                  />
                </div>

                <div className="flex justify-end space-x-4 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    Submit Grievance
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Grievance Details Modal */}
      {selectedGrievance && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Grievance #{selectedGrievance.id}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Submitted by {selectedGrievance.citizenName}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedGrievance(null)}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Service Type</h4>
                    <p className="text-gray-900 dark:text-white">{selectedGrievance.serviceType}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Status</h4>
                    <span className={`inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(selectedGrievance.status)}`}>
                      {getStatusIcon(selectedGrievance.status)}
                      <span>{selectedGrievance.status}</span>
                    </span>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Submission Date</h4>
                    <p className="text-gray-900 dark:text-white">
                      {new Date(selectedGrievance.submissionDate).toLocaleDateString()}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Resolution Time</h4>
                    <p className="text-gray-900 dark:text-white">
                      {selectedGrievance.daysToResolve ? `${selectedGrievance.daysToResolve} days` : 'Pending'}
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Complaint Description</h4>
                  <p className="text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                    {selectedGrievance.complaint}
                  </p>
                </div>

                {selectedGrievance.status === 'Resolved' && (
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Citizen Feedback</h4>
                    <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <MessageSquare className="w-4 h-4 text-gray-500" />
                        <span className={`text-sm font-medium ${
                          selectedGrievance.sentiment === 'Satisfied' ? 'text-green-600' :
                          selectedGrievance.sentiment === 'Neutral' ? 'text-yellow-600' : 'text-red-600'
                        }`}>
                          {selectedGrievance.sentiment}
                        </span>
                      </div>
                      <p className="text-gray-900 dark:text-white">{selectedGrievance.feedback}</p>
                    </div>
                  </div>
                )}

                <div className="flex justify-end">
                  <button
                    onClick={() => setSelectedGrievance(null)}
                    className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Grievances
