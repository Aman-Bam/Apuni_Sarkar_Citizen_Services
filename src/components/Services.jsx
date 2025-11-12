import { useState } from 'react'
import { Search, MapPin, Clock, Users, Home, Briefcase, Heart, GraduationCap } from 'lucide-react'
import { FileText } from "lucide-react";

const Services = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedService, setSelectedService] = useState(null)

  const categories = [
    { id: 'all', label: 'All Services', icon: Search },
    { id: 'housing', label: 'Housing', icon: Home },
    { id: 'employment', label: 'Employment', icon: Briefcase },
    { id: 'health', label: 'Health', icon: Heart },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: "Document", label: "Document", icon: FileText },
  ]

  const services =  [
  { 
    id: 1,
    title: 'Birth Certificate',
    category: 'Document',
    description: 'Apply for a new or duplicate birth certificate',
    department: 'Municipal Corporation / Registrar of Births & Deaths',
    applyUrl: 'https://dc.crsorgi.gov.in/',
    process: [
      'Register on the state e-district portal',
      'Fill out the birth certificate application form',
      'Upload hospital birth proof and parent ID',
      'Submit for verification by registrar',
      'Download digital birth certificate'
    ],
    timeline: '7-14 days',
    requiredDocs: ['Hospital birth proof', 'Parents ID proof', 'Address proof']
  },
  { 
    id: 2,
    title: 'Death Certificate',
    category: 'Document',
    description: 'Apply for official death certificate registration',
    department: 'Municipal Corporation / Registrar of Births & Deaths',
    applyUrl: 'https://dc.crsorgi.gov.in/',
    process: [
      'Register on the official state portal',
      'Enter details of deceased and date of death',
      'Upload hospital or cremation proof',
      'Submit application for verification',
      'Download certified death certificate'
    ],
    timeline: '7-10 days',
    requiredDocs: ['Hospital/cremation certificate', 'Deceased ID proof', 'Applicant ID proof']
  },
  { 
    id: 3,
    title: 'Caste Certificate',
    category: 'Document',
    description: 'Apply for Scheduled Caste, Scheduled Tribe or OBC certificate',
    department: 'Social Welfare Department',
    applyUrl: 'https://castcertificatewb.gov.in/',
    process: [
      'Login to e-District portal',
      'Fill in caste details and upload documents',
      'Verification by Tehsildar office',
      'Approval and digital signature',
      'Download caste certificate'
    ],
    timeline: '15-30 days',
    requiredDocs: ['Caste proof (parent certificate)', 'Address proof', 'Aadhaar card', 'Passport photo']
  },
  { 
    id: 4,
    title: 'Domicile Certificate',
    category: 'Document',
    description: 'Apply for domicile certificate to prove state residency',
    department: 'Revenue Department',
    applyUrl: 'https://services.india.gov.in/service/detail/domicile-certificate',
    process: [
      'Login to the official e-District portal',
      'Enter residence details and duration',
      'Upload supporting documents',
      'Verification by local authorities',
      'Download domicile certificate'
    ],
    timeline: '10-20 days',
    requiredDocs: ['Address proof', 'Aadhaar card', 'Self-declaration of residence']
  },
  { 
    id: 5,
    title: 'Income Certificate',
    category: 'Document',
    description: 'Obtain income certificate for scholarships, loans, and welfare schemes',
    department: 'Revenue Department',
    applyUrl: 'https://services.india.gov.in/service/detail/apply-online-for-income-certificate-1',
    process: [
      'Register on the e-District portal',
      'Fill income details of family members',
      'Upload income proof documents',
      'Verification by Revenue Officer',
      'Download approved income certificate'
    ],
    timeline: '7-15 days',
    requiredDocs: ['Salary slip/Income proof', 'Aadhaar card', 'Ration card', 'Address proof']
  },
  { 
    id: 6,
    title: 'Character Certificate',
    category: 'Document',
    description: 'Get a character certificate from the local police or authority',
    department: 'Police Department / Tehsildar Office',
    applyUrl: 'https://eservices.uk.gov.in/service/character-certificate-general',
    process: [
      'Login to police citizen service portal',
      'Fill personal and address details',
      'Upload ID and address proof',
      'Police verification and approval',
      'Download character certificate'
    ],
    timeline: '10-20 days',
    requiredDocs: ['Aadhaar card', 'Address proof', 'Passport photo']
  },
  { 
    id: 7,
    title: 'Marriage Certificate',
    category: 'Document',
    description: 'Register marriage and obtain official marriage certificate',
    department: 'Marriage Registrar Office / Municipal Corporation',
    applyUrl: 'https://igrsup.gov.in/igrsup/userMarriageRegistration',
    process: [
      'Register on the e-District portal',
      'Fill couple details and upload photos',
      'Schedule appointment for document verification',
      'Appear before marriage registrar',
      'Receive digital marriage certificate'
    ],
    timeline: '15-30 days',
    requiredDocs: ['Aadhaar card (both partners)', 'Wedding photos', 'Witness ID proof', 'Address proof']
  },
  { 
    id: 8,
    title: 'Ration Card',
    category: 'Document',
    description: 'Apply for new ration card or update existing one',
    department: 'Food & Civil Supplies Department',
    applyUrl: 'https://nfsa.gov.in/portal/ration_card_state_portals_aa',
    process: [
      'Visit the official food department portal',
      'Register and fill family details',
      'Upload ID and address proofs of all family members',
      'Verification by local authority',
      'Receive ration card via post or download online'
    ],
    timeline: '20-40 days',
    requiredDocs: ['Aadhaar card of family members', 'Address proof', 'Passport photo', 'Old ration card (if applicable)']
  },
  { 
    id: 9,
    title: 'Property Registration',
    category: 'housing',
    description: 'Register your property with the Uttarakhand government',
    department: 'Housing Department',
    applyUrl: 'https://registration.uk.gov.in/',
    process: [
      'Gather all required documents',
      'Visit nearest tehsil office',
      'Submit application with fees',
      'Verification and approval',
      'Receive registration certificate'
    ],
    timeline: '7-15 days',
    requiredDocs: ['Property documents', 'ID proof', 'Address proof', 'Photos']
  },
  { 
    id: 10,
    title: 'Job Opportunities',
    category: 'employment',
    description: 'Register for government job opportunities/Result',
    department: 'Employment Department',
    applyUrl: 'https://sarkariresult.com.cm/',
    process: [
      'Create account on employment portal',
      'Upload resume and documents',
      'Appear for written examination',
      'Clear interview round',
      'Receive job offer'
    ],
    timeline: '30-90 days',
    requiredDocs: ['Resume', 'Education certificates', 'ID proof', 'Experience letters']
  },
  { 
    id: 11,
    title: 'Health Card Application',
    category: 'health',
    description: 'Apply for Ayushman Bharat health card',
    department: 'Health Department',
    applyUrl: 'https://abdm.gov.in/',
    process: [
      'Visit nearest health center',
      'Fill application form',
      'Submit income proof',
      'Biometric verification',
      'Receive health card'
    ],
    timeline: '3-7 days',
    requiredDocs: ['Income certificate', 'ID proof', 'Address proof', 'Family details']
  },
  { 
    id: 12,
    title: 'Aadhaar Application',
    category: 'Document',
    description: 'Apply for Aadhaar card issuance',
    department: 'UIDAI',
    applyUrl: 'https://uidai.gov.in/en/',
    process: [
      'Fill Aadhaar enrollment form',
      'Submit biometric data (fingerprint, iris scan, photograph)',
      'Provide required documents for verification',
      'Review and confirm details',
      'Receive acknowledgment slip with enrollment ID',
      'Download Aadhaar card once generated'
    ],
    timeline: '15-45 days',
    requiredDocs: ['Identity proof', 'Address proof', 'Date of birth proof']
  },
  { 
    id: 13,
    title: 'Education Scholarship',
    category: 'education',
    description: 'Apply for various education scholarships',
    department: 'Education Department',
    applyUrl: 'https://www.education.gov.in/scholarships',
    process: [
      'Check eligibility criteria',
      'Fill online application',
      'Upload required documents',
      'Verification by school/college',
      'Receive scholarship amount'
    ],
    timeline: '15-30 days',
    requiredDocs: ['Mark sheets', 'Income certificate', 'Admission letter', 'Bank details']
  },
  { 
    id: 14,
    title: 'Water Connection',
    category: 'housing',
    description: 'Apply for new water connection',
    department: 'Public Works Department',
    applyUrl: 'https://ujs.uk.gov.in/',
    process: [
      'Submit application at local office',
      'Site inspection and approval',
      'Pay connection charges',
      'Installation of meter',
      'Connection activation'
    ],
    timeline: '10-20 days',
    requiredDocs: ['Property documents', 'ID proof', 'Address proof', 'Payment receipt']
  },
  { 
    id: 15,
    title: 'Business License',
    category: 'employment',
    description: 'Obtain license for starting business',
    department: 'Industry Department',
    applyUrl: 'https://ads.masdarcityfreezone.com/business-setup-ga/',
    process: [
      'Prepare business plan',
      'Register business name',
      'Obtain necessary permits',
      'Pay registration fees',
      'Receive license certificate'
    ],
    timeline: '15-45 days',
    requiredDocs: ['Business plan', 'ID proof', 'Address proof', 'Financial documents']
  },
  { 
    id: 16,
    title: 'PAN Application',
    category: 'Document',
    description: 'Apply for Permanent Account Number (PAN)',
    department: 'Income Tax Department',
    applyUrl: 'https://onlineservices.proteantech.in/paam/endUserRegisterContact.html',
    process: [
      'Fill PAN application form (Form 49A or 49AA)',
      'Attach required documents',
      'Submit form online or at PAN center',
      'Pay processing fee',
      'Receive acknowledgment number',
      'Track application status and download e-PAN'
    ],
    timeline: '15-45 days',
    requiredDocs: ['Identity proof', 'Address proof', 'Date of birth proof', 'Passport-size photograph']
  },
  { 
    id: 17,
    title: 'Voter ID',
    category: 'Document',
    description: 'Apply for voter ID registration',
    department: 'Election Commission of India',
    applyUrl: 'https://voters.eci.gov.in/',
    process: [
      'Visit NVSP or respective state election office website',
      'Fill Form 6 for new voter registration',
      'Upload or submit required documents',
      'Submit application and note reference number',
      'Wait for verification by BLO (Booth Level Officer)',
      'Receive voter ID card at registered address'
    ],
    timeline: '15-45 days',
    requiredDocs: ['Identity proof', 'Address proof', 'Photograph', 'Age proof (for first-time voters)']
  }
];

  const filteredServices = services.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="space-y-6">
      {/* Search and Filter */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              />
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => {
              const Icon = category.icon
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{category.label}</span>
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredServices.map((service) => (
          <div
            key={service.id}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow cursor-pointer"
            onClick={() => setSelectedService(service)}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  service.category === 'housing' ? 'bg-blue-100 text-blue-600' :
                  service.category === 'employment' ? 'bg-green-100 text-green-600' :
                  service.category === 'health' ? 'bg-red-100 text-red-600' :
                  'bg-purple-100 text-purple-600'
                }`}>
                  {service.category === 'housing' && <Home className="w-5 h-5" />}
                  {service.category === 'employment' && <Briefcase className="w-5 h-5" />}
                  {service.category === 'health' && <Heart className="w-5 h-5" />}
                  {service.category === 'education' && <GraduationCap className="w-5 h-5" />}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">{service.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{service.department}</p>
                </div>
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-4">{service.description}</p>
            <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>{service.timeline}</span>
              </div>
              <button className="text-blue-600 hover:text-blue-700 font-medium">
                View Details →
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Service Details Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{selectedService.title}</h2>
                  <p className="text-gray-600 dark:text-gray-400">{selectedService.department}</p>
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Description</h3>
                  <p className="text-gray-700 dark:text-gray-300">{selectedService.description}</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Process Steps</h3>
                  <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    {selectedService.process.map((step, index) => (
                      <li key={index}>{step}</li>
                    ))}
                  </ol>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Timeline</h3>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-700 dark:text-gray-300">{selectedService.timeline}</span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Required Documents</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                      {selectedService.requiredDocs.map((doc, index) => (
                        <li key={index}>{doc}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex justify-end space-x-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <button
                    onClick={() => setSelectedService(null)}
                    className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
                  >
                    Close
                  </button>
                  <button 
                    onClick={() => window.open(selectedService.applyUrl, '_blank')}
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    Apply Now
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

export default Services
