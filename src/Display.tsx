import React from 'react';

import { withStyles, createStyles, Theme } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography'

import { aOrAn } from './util'

class Display extends React.Component<Props, State> {
  render() {
    const { name, index, word, img, classes } = this.props
    const letter = name[index].toUpperCase()
    return (
      <div className={classes.main}>
        <div className={classes.background} style={{ background: `url("${img}") no-repeat center center fixed`, backgroundSize: 'cover' }} >
          <Typography variant='h1' className={classes.header}>
            {name} with {aOrAn(letter)} {letter}
          </Typography>
          <Typography variant='h1' className={classes.header}>
            and the {letter} is for "{word}"
          </Typography>
        </div>
      </div>
    )
  }
}

interface Props {
  name: string
  index: number
  word: string
  img: string
  classes: any
}

interface State { }

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
      marginBottom: 128,
      fontSize: 140,
      zIndex: 1,
      color: 'white',
      textAlign: 'center',
      mixBlendMode: 'difference'
    },
    input: {
      fontSize: 72,
      '& input': {
        textAlign: 'center',
      }
    },
    background: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundSize: 'cover',
      zIndex: 0
    },
    img: {
      width: '100%',
      height: '100%',
    }
  });

export default withStyles(styles)(Display)
