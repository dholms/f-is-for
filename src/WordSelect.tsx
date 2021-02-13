import React, { FormEvent, ChangeEvent } from 'react';

import { withStyles, createStyles, Theme } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography'
import Input from '@material-ui/core/Input'
import Button from '@material-ui/core/Button'

class NameEntry extends React.Component<Props, State> {

  state = {
    word: ''
  }

  selectCategory = (category: string) => {

  }

  onSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    this.props.onSubmit(this.state.word)
  }

  onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const word = event.target.value
    this.setState({ word })
  }

  render() {
    const { name, index, classes } = this.props
    const letter = name[index].toUpperCase()
    return (

      <div className={classes.main}>
        <Typography variant='h1' className={classes.header}>
          Choose a category
        </Typography>
        <Typography variant='h1' className={classes.header}>
          Or type your own
        </Typography>
        <form onSubmit={this.onSubmit}>
          <Input 
            className={classes.input} 
            onChange={this.onChange}
            value={this.state.word}
          />
          </form>
      </div>
    )
  }
}

interface Props {
  name: string
  index: number
  onSubmit: (name: string) => void
  classes: any
}

interface State {
  word: string
}

const styles = (theme: Theme) =>
  createStyles({
    main: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    header: {
      marginTop: 128,
      marginBottom: 128
    },
    input: {
      fontSize: 72,
      '& input': {
        textAlign: 'center',
      }
    }
  });

export default withStyles(styles)(NameEntry)
