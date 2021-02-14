import React, { FormEvent, ChangeEvent } from 'react';

import { withStyles, createStyles, Theme } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography'
import Input from '@material-ui/core/Input'

class NameEntry extends React.Component<Props, State> {

  state = {
    name: ''
  }

  onSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    const name = this.state.name
    if(name.length > 0) {
      const nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1)
      this.props.onSubmit(nameCapitalized)
    }
  }

  onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.value
    this.setState({ name })
  }

  render() {
    const { classes } = this.props
    return (
      <div className={classes.main}>
        <Typography variant='h1' className={classes.header}>
          Enter a name
        </Typography>
        <form onSubmit={this.onSubmit}>
          <Input 
            className={classes.input} 
            onChange={this.onChange}
            value={this.state.name}
          />
          </form>
      </div>
    )
  }
}

interface Props {
  onSubmit: (name: string) => void
  classes: any
}

interface State {
  name: string
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
