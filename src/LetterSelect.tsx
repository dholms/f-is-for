import React from 'react';

import { withStyles, createStyles, Theme } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

class LetterSelect extends React.Component<Props, State> {

  selectLetter = (index: number) => {
    this.props.onSelect(index)
  }

  render() {
    const { name, classes } = this.props
    return (
      <div className={classes.main}>
        <Typography variant='h1' className={classes.header}>
          Select a letter
        </Typography>
        <div className={classes.letters}>
          {name.split('').map((letter, i) =>
            <Button 
              onClick={() => this.selectLetter(i)} 
              className={classes.letter}
              key={i}
            >
              {letter}
            </Button>
          )}
        </div>
      </div>
    )
  }
}

interface Props {
  name: string
  onSelect: (index: number) => void
  classes: any
}

interface State {
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
    letters: {
      display: 'flex',
      flexDirection: 'row'
    },
    letter: {
      fontSize: 72
    }
  });

export default withStyles(styles)(LetterSelect)
