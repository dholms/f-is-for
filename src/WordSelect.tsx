import React, { FormEvent, ChangeEvent } from 'react';

import { withStyles, createStyles, Theme } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography'
import Input from '@material-ui/core/Input'
import Button from '@material-ui/core/Button'

import { findImage, findWordAndImage } from './unsplash'

class NameEntry extends React.Component<Props, State> {

  state = {
    word: ''
  }

  selectCategory = async (category: string) => {
    const letter = this.props.name[this.props.index].toLowerCase()
    const { img, word } = await findWordAndImage(category, letter)
    this.props.onSubmit(word, img)

  }

  onSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    const img = await findImage(this.state.word)
    if(img !== null){
      this.props.onSubmit(this.state.word, img)
    }
  }

  onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const word = event.target.value
    this.setState({ word })
  }

  render() {
    const { classes } = this.props
    return (
      <div className={classes.main}>
        <Typography variant='h1' className={classes.header}>
          Choose a category
        </Typography>
        <div className={classes.buttons}>
          <Button onClick={() => this.selectCategory('bible')} variant='outlined' className={classes.btn}>Bible</Button>
          <Button onClick={() => this.selectCategory('war_and_peace')} variant='outlined' className={classes.btn}>War and Peace</Button>
          <Button onClick={() => this.selectCategory('fifty_shades')} variant='outlined' className={classes.btn}>Fifty Shades of Grey</Button>
          <Button onClick={() => this.selectCategory('order_phoenix')} variant='outlined' className={classes.btn}>Order of the Phoenix</Button>
        </div>
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
  onSubmit: (word: string, img: string) => void
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
      marginTop: 64,
      marginBottom: 64
    },
    input: {
      fontSize: 72,
      '& input': {
        textAlign: 'center',
      }
    },
    buttons: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    btn: {
      fontSize: 16,
      width: '50%',
      margin: 8
    }
  });

export default withStyles(styles)(NameEntry)
