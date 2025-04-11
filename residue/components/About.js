export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-600 mb-6">
            I am a passionate web developer with expertise in creating modern web applications.
            [Add your personal description here]
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Skills</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  HTML, CSS, JavaScript
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  React.js
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  Node.js
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Education</h3>
              <ul className="space-y-4">
                <li>
                  <h4 className="font-medium">Your Degree</h4>
                  <p className="text-gray-600">Your University</p>
                  <p className="text-gray-500">2020 - 2024</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
