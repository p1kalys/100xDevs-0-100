import { useState } from 'react'

function App(props) {
  const styles = {
    card : {
      border: '1px solid grey',
      margin: '20px',
      padding: '20px',
      borderRadius: '10px',
      backgroundColor: 'white'
    },
    title: {
      fontsize: '10px',
      color: '#1b1b1b',
      marginBottom: '10px'
    },
    description: {
      fontsize: '8px',
      color: '#000000',
      marginBottom: '10px'
    },
    interest: {
      fontsize: '8px',
      color: '#141313',
      marginBottom:'10px'
    },
    interestlist : {
      fontsize: '8px',
      color: '#11199',
      marginBottom:'10px',
      listStyle: 'none',
      paddingLeft: '2px'
    },
    interestItem : {
      paddingBottom: '5px',
      margin: '0px',
      padding: '0px'
    },
    sociallinks: {
      display: 'flex',
      marginBottom: '10px'
    },
    link : {
      border: '1px solid blue',
      padding: '10px 10px',
      display: 'inline-block',
      borderRadius: '5px',
      color: '#fff',
      backgroundColor: '#0077ff',
      margin: '10px',
      textDecoration: 'none'
    }

  }
  
  return (
    <div style={styles.card}>
      <h1 style={styles.title}>{props.name}</h1>
      <p style={styles.description}>{props.description}</p>
      <h3 style={styles.interest}>Interests</h3>
      <ul style={styles.interestlist}>
          {props.interests.map((interest) => (
            <li key={interest} style={styles.interestItem}>
              {interest}
            </li>
          ))}
        </ul> 
        <div style={styles.sociallinks}>
          <a href={props.linkedin} target="_blank" rel="noopener noreferrer" style={{...styles.link, marginLeft: '0px'}}>
            LinkedIn
          </a>
          <br />
          <a href={props.twitter} target="_blank" rel="noopener noreferrer" style={styles.link}>
            Twitter
          </a>
          {props.otherSocialMedia && (
            <a href={props.otherSocialMedia} target="_blank" rel="noopener noreferrer" style={styles.link}>
              {props.otherSocialMedia.label}
            </a>
          )}
        </div>
    </div>
  )
}

export default App
