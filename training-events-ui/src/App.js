import 'bootstrap/dist/css/bootstrap.css';

import {
  gql,
  useQuery
} from "@apollo/client";

const GET_ALL_SESSIONS = gql`
  query GET_ALL_SESSIONS{
    sessions {
      id
      title
      track
      level
      speakers {
        id
        name
        bio
      }
    }
  }
`

function App() {
  const { loading, error, data } = useQuery(GET_ALL_SESSIONS)
  const renderSessions = () => {
    return data.sessions.map((session, idx) => {
      return (
        <div key={idx} className="list-group-item">
          <h1>{session.title}</h1>
          <div>{session.speakers.map((sp, idx) => {
            return (
              <h6 key={idx}>{sp.name}</h6>
            )
          })}</div>
        </div>
      )
    })
  }

  return (
    <div className="container">
      <hr />
      {loading ? 'Loading sessions' : ''}
      {error ? "error" : ''}
      {data ? renderSessions() : ''}
    </div>
  );
}

export default App;
