import { useState } from 'react'
import './App.css'
import { questions, personalityTypes } from './data/questions'
import { exportToPdf } from './utils/pdfExport'

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState({})
  const [showResults, setShowResults] = useState(false)
  const [profile, setProfile] = useState(null)

  const caseNumber = Math.floor(8427)

  const calculateProfile = () => {
    const scores = {}
    
    Object.values(answers).forEach(answer => {
      Object.entries(answer).forEach(([trait, score]) => {
        scores[trait] = (scores[trait] || 0) + score
      })
    })

    const sortedTraits = Object.entries(scores)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 3)

    const primaryType = sortedTraits[0]?.[0] || 'narcissistic'
    const secondaryType = sortedTraits[1]?.[0] || 'antisocial'

    const typeData = personalityTypes[primaryType]
    
    const matchPercentage = Math.min(95, 60 + (sortedTraits[0]?.[1] || 0) * 3)

    return {
      primaryType,
      secondaryType,
      primaryData: typeData,
      secondaryData: personalityTypes[secondaryType],
      matchPercentage,
      scores: sortedTraits
    }
  }

  const handleAnswer = (option) => {
    const newAnswers = { ...answers, [currentQuestion]: option.score }
    setAnswers(newAnswers)

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setProfile(calculateProfile())
      setShowResults(true)
    }
  }

  const resetProfiler = () => {
    setCurrentQuestion(0)
    setAnswers({})
    setShowResults(false)
    setProfile(null)
  }

  const getProgress = () => {
    return ((currentQuestion + 1) / questions.length) * 100
  }

  if (showResults && profile) {
    return (
      <div className="app">
        <div className="results-container" id="results-content">
          <div className="results-header">
            <div className="case-file">CASE FILE #2024-{caseNumber}</div>
            <h1>PSYCHOLOGICAL PROFILE</h1>
          </div>

          <div className="match-indicator">
            <div className="match-circle" style={{ '--percentage': profile.matchPercentage }}>
              <span className="match-number">{profile.matchPercentage}%</span>
              <span className="match-label">MATCH</span>
            </div>
          </div>

          <div className="profile-type">
            <h2>{profile.primaryData.name}</h2>
            <p className="profile-description">{profile.primaryData.description}</p>
            <div className="risk-badge" data-risk={profile.primaryData.riskLevel}>
              RISK LEVEL: {profile.primaryData.riskLevel.toUpperCase()}
            </div>
          </div>

          <div className="traits-section">
            <h3>Characteristic Traits</h3>
            <div className="traits-list">
              {profile.primaryData.traits.map((trait, index) => (
                <span key={index} className="trait-tag">{trait}</span>
              ))}
            </div>
          </div>

          <div className="famous-section">
            <h3>Known Associates</h3>
            <div className="famous-list">
              {profile.primaryData.famousExamples.map((name, index) => (
                <span key={index} className="famous-tag">{name}</span>
              ))}
            </div>
          </div>

          <div className="secondary-type">
            <h3>Secondary Profile: {profile.secondaryData.name}</h3>
            <p>{profile.secondaryData.description}</p>
          </div>

          <button className="reset-btn" onClick={() => exportToPdf('.results-container', `psychological-profile-${caseNumber}.pdf`)}>
            EXPORT PDF
          </button>

          <button className="reset-btn" onClick={resetProfiler}>
            NEW PROFILE
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="app">
      <div className="profiler-container">
        <div className="header">
          <div className="case-number">CASE FILE #2024-{caseNumber}</div>
          <h1>True Crime Personality Profiler</h1>
          <p className="subtitle">Psychological Assessment Instrument</p>
        </div>

        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${getProgress()}%` }}></div>
        </div>

        <div className="question-card">
          <div className="question-meta">
            <span className="question-number">QUESTION {currentQuestion + 1}/{questions.length}</span>
            <span className="question-category">{questions[currentQuestion].category}</span>
          </div>

          <h2 className="question-text">{questions[currentQuestion].text}</h2>

          <div className="options-grid">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className="option-btn"
                onClick={() => handleAnswer(option)}
              >
                <span className="option-letter">{String.fromCharCode(65 + index)}</span>
                <span className="option-text">{option.text}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="instructions">
          <p>Answer honestly to generate an accurate psychological profile</p>
        </div>
      </div>
    </div>
  )
}

export default App
