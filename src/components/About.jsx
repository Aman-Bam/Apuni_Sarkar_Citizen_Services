import { MapPin, Users, Award, Target, Heart, Shield } from 'lucide-react'

const About = () => {
  const features = [
    {
      icon: Users,
      title: 'Citizen-Centric Services',
      description: 'Streamlined access to government services with user-friendly interfaces and real-time tracking.'
    },
    {
      icon: Target,
      title: 'AI-Powered Analytics',
      description: 'Advanced sentiment analysis and predictive insights to improve service delivery and citizen satisfaction.'
    },
    {
      icon: Shield,
      title: 'Transparent Governance',
      description: 'Complete transparency in grievance handling with timeline tracking and citizen feedback integration.'
    },
    {
      icon: Heart,
      title: 'Inclusive Design',
      description: 'Accessible platform supporting multiple languages and devices for all citizens of Uttarakhand.'
    }
  ]

  const stats = [
    { label: 'Citizens Served', value: '2.5M+', icon: Users },
    { label: 'Services Available', value: '150+', icon: Target },
    { label: 'Resolution Rate', value: '92%', icon: Award },
    { label: 'Avg Response Time', value: '24 Hour', icon: Shield }
  ]

  const techStack = [
    { name: 'React', color: 'bg-blue-600', label: 'R', description: 'Frontend Framework' },
    { name: 'Tailwind CSS', color: 'bg-cyan-600', label: 'T', description: 'Styling Framework' },
    { name: 'Recharts', color: 'bg-purple-600', label: 'R', description: 'Data Visualization' },
    { name: 'AI Analytics', color: 'bg-orange-600', label: 'AI', description: 'Sentiment Analysis' }
  ]

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center py-12">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center shadow-lg transform transition-transform hover:scale-110 duration-300">
            <MapPin className="w-10 h-10 text-white" />
          </div>
        </div>
        <h1 className="text-5xl font-bold text-brown-500 dark:text-brown mb-4 transition-colors duration-300">
          Apuni Sarkar
        </h1>
        <p className="text-xl text-brown-500 dark:text-brown mb-6 max-w-3xl mx-auto transition-colors duration-300">
          Smart Citizen Services Dashboard for Uttarakhand Government
        </p>
        <p className="text-lg text-brown-500 dark:text-brown max-w-4xl mx-auto leading-relaxed transition-colors duration-300">
          Empowering citizens with transparent, efficient, and AI-driven government services.
          Track grievances, access services, and participate in governance through our comprehensive digital platform.
        </p>
      </div>

      {/* Mission Statement */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-xl shadow-xl transform transition-all hover:shadow-2xl duration-300">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg leading-relaxed max-w-4xl mx-auto">
            To transform Uttarakhand's governance through digital innovation, ensuring every citizen
            has easy access to government services, transparent grievance redressal, and meaningful
            participation in the democratic process. We leverage AI and data analytics to continuously
            improve service delivery and citizen satisfaction.
          </p>
        </div>
      </div>

      {/* Key Features */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center transition-colors duration-300">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                    <Icon className="w-7 h-7 text-blue-600 dark:text-blue-400 transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Statistics */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center transition-colors duration-300">
          Impact Statistics
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div 
                key={index} 
                className="text-center p-6 rounded-xl bg-white dark:bg-gray-800 shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors duration-300">
                  <Icon className="w-8 h-8 text-blue-600 dark:text-blue-400 transition-colors duration-300" />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Technology Stack */}
      <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg transition-all duration-300">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center transition-colors duration-300">
          Technology Stack
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {techStack.map((tech, index) => (
            <div key={index} className="text-center group">
              <div className={`w-16 h-16 ${tech.color} rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg transform transition-all group-hover:scale-110 group-hover:shadow-xl duration-300`}>
                <span className="text-white font-bold text-lg">{tech.label}</span>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1 transition-colors duration-300">
                {tech.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">
                {tech.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 transition-all duration-300">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center transition-colors duration-300">
          Contact Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
              Government Offices
            </h3>
            <div className="space-y-3 text-gray-600 dark:text-gray-400 transition-colors duration-300">
              <p><strong className="text-gray-800 dark:text-gray-300">Chief Minister's Office:</strong> Secretariat, Dehradun</p>
              <p><strong className="text-gray-800 dark:text-gray-300">Helpdesk:</strong> 1800-XXX-XXXX (Toll-free)</p>
              <p><strong className="text-gray-800 dark:text-gray-300">Email:</strong> help@uttarakhand.gov.in</p>
              <p><strong className="text-gray-800 dark:text-gray-300">Website:</strong> www.uttarakhand.gov.in</p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
              Technical Support
            </h3>
            <div className="space-y-3 text-gray-600 dark:text-gray-400 transition-colors duration-300">
              <p><strong className="text-gray-800 dark:text-gray-300">Developer Portal:</strong> developer.apunisarkar.in</p>
              <p><strong className="text-gray-800 dark:text-gray-300">API Documentation:</strong> docs.apunisarkar.in</p>
              <p><strong className="text-gray-800 dark:text-gray-300">GitHub:</strong> github.com/uttarakhand/apuni-sarkar</p>
              <p><strong className="text-gray-800 dark:text-gray-300">Status Page:</strong> status.apunisarkar.in</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center py-8 border-t border-gray-200 dark:border-gray-700 transition-colors duration-300">
        <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">
          © 2024 Government of Uttarakhand. Built for AI Mission Hackathon.
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
          Empowering citizens through transparent and efficient governance.
        </p>
      </div>
    </div>
  )
}

export default About