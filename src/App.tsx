import React from 'react';
import 'fontsource-roboto';

import NameEntry from './NameEntry'
import LetterSelect from './LetterSelect'
import WordSelect from './WordSelect'
import Display from './Display'

import qs from 'query-string'

import { isString } from './util'

class App extends React.Component<Props, State> {

  state: State = {
    name: null,
    index: null,
    word: null,
    img: null,
  }

  componentDidMount() {
    console.log(window.location)
    const params = qs.parse(window.location.search)
    if(isString(params.name) && isString(params.index) && isString(params.word) && isString(params.img)) {
      const { name, word, img } = params
      const index = parseInt(params.index)
      this.setState({ name, index, word, img })
    }
  }

  onNameEnter = (name: string) => {
    this.setState({ name })
  }

  onLetterSelect = (index: number) => {
    this.setState({ index })
  }

  onWordSelect = async (word: string, img: string) => {
    this.setState({ img, word })
  }

  render() {
    if(this.state.name !== null) {
      if(this.state.index !== null) {
        if(this.state.word !== null && this.state.img !== null) {
          return <Display
            name={this.state.name}
            index={this.state.index}
            word={this.state.word}
            img={this.state.img}
          />
        }
        return <WordSelect name={this.state.name} index={this.state.index} onSubmit={this.onWordSelect} />
      }
      return <LetterSelect name={this.state.name} onSelect={this.onLetterSelect}/>
    }
    return <NameEntry onSubmit={this.onNameEnter}/>
  }
}

interface Props {

}

interface State {
  name: string | null
  index: number | null
  word: string | null
  img: string | null
}

export default App;
