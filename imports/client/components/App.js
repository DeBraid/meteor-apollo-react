import React from 'react';
import { connect } from 'react-apollo';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      
    }
  }
  render() {
    // const { youtubeVideos } = this.props;
    const { Producers } = this.props;
    // const videos = youtubeVideos && youtubeVideos.data;
    const producers = Producers && Producers.data;
    data = _.sortBy(producers, 'registrationRequests');
    var textStyle = {
      color: 'blue',
      fontSize: '20px'
    };
    
    return (
      <div className="main-container">
        <h1>Producer Facts</h1>          
        <h3>Registration Requests Total</h3>          
        <div>
          {_.map( data.reverse() , ({ name, registrationRequests }, index) => {
            return (
              <div className="vendor" key={index}>
                <span style={textStyle}>
                  {name}: 
                </span>
                 {registrationRequests}
                
              </div>
            );
          })}
        </div>
        
      </div>
    );
  }
}

function mapQueriesToProps() {
  return {
    Producers: {
      query: gql`{
        data {
         name
         registrationRequests
        }
      }
      `,
      forceFetch: true,
    }
  }
}


export default connect({mapQueriesToProps})(App);
