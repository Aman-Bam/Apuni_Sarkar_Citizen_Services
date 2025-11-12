// Sample data for Apuni Sarkar Dashboard
// 500+ realistic grievances with Uttarakhand context

const departments = ['Housing', 'Employment', 'Health', 'Education']
const statuses = ['Pending', 'In Progress', 'Resolved']
const sentiments = ['Satisfied', 'Neutral', 'Unsatisfied']

const complaintTemplates = {
  Housing: [
    'Road maintenance issue in {location}',
    'Water supply problem in {location}',
    'Property registration delay',
    'Building permission not granted',
    'Street light not working in {location}',
    'Drainage system blocked in {location}',
    'House tax assessment dispute',
    'Illegal construction complaint',
    'Land encroachment issue',
    'Housing loan application stuck'
  ],
  Employment: [
    'Job application not processed',
    'Employment card renewal delay',
    'Skill development program registration',
    'Unemployment allowance not received',
    'Job fair organization complaint',
    'Employment exchange service slow',
    'Training program quality issue',
    'Placement assistance not provided',
    'Employment verification delay',
    'Career counseling session complaint'
  ],
  Health: [
    'Hospital appointment delay',
    'Medicine availability issue',
    'Health card application stuck',
    'Medical test results delay',
    'Doctor consultation complaint',
    'Ambulance service delay',
    'Health insurance claim issue',
    'Vaccination center problem',
    'Medical certificate delay',
    'Emergency service response slow'
  ],
  Education: [
    'School admission delay',
    'Scholarship application stuck',
    'Examination result delay',
    'School fee reimbursement issue',
    'Teacher shortage complaint',
    'Education loan processing delay',
    'Textbook distribution problem',
    'School infrastructure issue',
    'Student transfer delay',
    'Education certificate delay'
  ]
}

const locations = [
  'Dehradun', 'Haridwar', 'Roorkee', 'Rishikesh', 'Haldwani', 'Rudrapur',
  'Kashipur', 'Ramanagar', 'Pithoragarh', 'Almora', 'Nainital', 'Bageshwar',
  'Champawat', 'Uttarkashi', 'Tehri', 'Pauri', 'Rudraprayag', 'Chamoli',
  'Mussoorie', 'Clement Town', 'Vikasnagar', 'Raiwala', 'Doiwala'
]

const feedbackTemplates = {
  Satisfied: [
    'Excellent service! Issue resolved quickly.',
    'Very satisfied with the response time.',
    'Government officials were helpful and efficient.',
    'Problem solved within promised timeline.',
    'Great improvement in service delivery.'
  ],
  Neutral: [
    'Service was okay, could be better.',
    'Resolution took longer than expected.',
    'Process was complicated but eventually worked.',
    'Staff was cooperative but system is slow.',
    'Issue resolved but with some delays.'
  ],
  Unsatisfied: [
    'Very disappointed with the service.',
    'No response even after multiple follow-ups.',
    'Process is too complicated and time-consuming.',
    'Officials were not helpful at all.',
    'Still waiting for resolution after months.'
  ]
}

// Generate 500+ sample grievances
const generateGrievances = () => {
  const grievances = []
  const startDate = new Date('2024-01-01')
  const endDate = new Date('2024-11-11')

  for (let i = 1; i <= 550; i++) {
    const department = departments[Math.floor(Math.random() * departments.length)]
    const status = statuses[Math.floor(Math.random() * statuses.length)]
    const sentiment = sentiments[Math.floor(Math.random() * sentiments.length)]
    const location = locations[Math.floor(Math.random() * locations.length)]

    // Generate random submission date
    const randomTime = startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime())
    const submissionDate = new Date(randomTime)

    // Calculate resolution date based on status
    let resolutionDate = null
    let daysToResolve = null
    if (status === 'Resolved') {
      const resolveDays = Math.floor(Math.random() * 30) + 1 // 1-30 days
      resolutionDate = new Date(submissionDate.getTime() + resolveDays * 24 * 60 * 60 * 1000)
      daysToResolve = resolveDays
    } else if (status === 'In Progress') {
      const inProgressDays = Math.floor(Math.random() * 15) + 1 // 1-15 days so far
      daysToResolve = inProgressDays
    }

    // Generate complaint description
    const templates = complaintTemplates[department]
    const template = templates[Math.floor(Math.random() * templates.length)]
    const complaint = template.replace('{location}', location)

    // Generate feedback
    const feedbackOptions = feedbackTemplates[sentiment]
    const feedback = feedbackOptions[Math.floor(Math.random() * feedbackOptions.length)]

    grievances.push({
      id: i,
      serviceType: department,
      complaint,
      status,
      submissionDate: submissionDate.toISOString().split('T')[0],
      resolutionDate: resolutionDate ? resolutionDate.toISOString().split('T')[0] : null,
      sentiment,
      daysToResolve,
      feedback,
      citizenName: `Citizen ${i}`,
      contactNumber: `9${Math.floor(Math.random() * 900000000) + 100000000}`,
      location
    })
  }

  return grievances
}

export const grievances = generateGrievances()

// Analytics data derived from grievances
export const analyticsData = {
  totalGrievances: grievances.length,
  resolvedGrievances: grievances.filter(g => g.status === 'Resolved').length,
  pendingGrievances: grievances.filter(g => g.status === 'Pending').length,
  inProgressGrievances: grievances.filter(g => g.status === 'In Progress').length,
  averageResolutionTime: Math.round(
    grievances
      .filter(g => g.daysToResolve)
      .reduce((sum, g) => sum + g.daysToResolve, 0) /
    grievances.filter(g => g.daysToResolve).length
  ),
  successRate: Math.round(
    (grievances.filter(g => g.status === 'Resolved').length / grievances.length) * 100
  ),

  // Sentiment analysis
  sentimentData: sentiments.map(sentiment => ({
    name: sentiment,
    value: grievances.filter(g => g.sentiment === sentiment).length,
    percentage: Math.round(
      (grievances.filter(g => g.sentiment === sentiment).length / grievances.length) * 100
    ),
    color: sentiment === 'Satisfied' ? '#10B981' : sentiment === 'Neutral' ? '#F59E0B' : '#EF4444'
  })),

  // Department performance
  departmentData: departments.map(dept => {
    const deptGrievances = grievances.filter(g => g.serviceType === dept)
    const resolved = deptGrievances.filter(g => g.status === 'Resolved')
    const avgDays = resolved.length > 0 ?
      Math.round(resolved.reduce((sum, g) => sum + g.daysToResolve, 0) / resolved.length) : 0

    return {
      department: dept,
      total: deptGrievances.length,
      resolved: resolved.length,
      avgResolutionDays: avgDays,
      resolutionRate: Math.round((resolved.length / deptGrievances.length) * 100)
    }
  }),

  // Service demand forecasting (7 days)
  demandData: [
    { day: 'Mon', Housing: 45, Employment: 32, Health: 28, Education: 35 },
    { day: 'Tue', Housing: 52, Employment: 38, Health: 31, Education: 42 },
    { day: 'Wed', Housing: 48, Employment: 35, Health: 29, Education: 38 },
    { day: 'Thu', Housing: 55, Employment: 41, Health: 33, Education: 45 },
    { day: 'Fri', Housing: 58, Employment: 44, Health: 36, Education: 48 },
    { day: 'Sat', Housing: 42, Employment: 28, Health: 25, Education: 32 },
    { day: 'Sun', Housing: 38, Employment: 25, Health: 22, Education: 28 }
  ]
}

export default { grievances, analyticsData }
