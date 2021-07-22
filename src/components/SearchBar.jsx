import { useEffect, useState } from 'react'
import { Form, Segment } from 'semantic-ui-react'

const SearchBar = ({ onTermSubmit }) => {
  const [term, setTerm] = useState('buildings')

  const onFormSubmit = (event) => {
    event.preventDefault()

    onTermSubmit(term)
  }

  const onInputChange = (event) => {
    setTerm(event.target.value)
  }

  useEffect(() => {
    onTermSubmit('buildings')
  }, [])

  return (
    <Segment>
      <Form onSubmit={onFormSubmit}>
        <Form.Field>
          <label>Youtube Video Search</label>
          <input
            value={term}
            onChange={onInputChange}
          />
        </Form.Field>
      </Form>
    </Segment>
  )
}

export default SearchBar
