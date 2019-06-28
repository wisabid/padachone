import React from 'react';
import TextField from '@material-ui/core/TextField';
import DialogModal from '../Modal';
import {useCalcMethods} from '../../hooks/api-hooks';

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';

const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
  }));

//for radio
//   const useStyles = makeStyles(theme => ({
//     root: {
//       display: 'flex',
//     },
//     formControl: {
//       margin: theme.spacing(3),
//     },
//     group: {
//       margin: theme.spacing(1, 0),
//     },
//   }));
  
const Finetune = (props) => {
    const [methods, setMethods] = useCalcMethods();
    const [state, setState] = React.useState({
        open: false,
        age: '',
      });
      const classes = useStyles();
    const handleChange = name => event => {
        setState({ ...state, [name]: Number(event.target.value) });
    };

    const [value, setValue] = React.useState('female');

  function handleRadChange(event) {
    setValue(event.target.value);
  }
    console.log('HELLOOO', methods);
    const [tuning, setTuning] = React.useState({
        loading: false, 
      });
    const handlePrimary = () => {
        setTuning({...tuning, loading : true})
        console.log('Primary Action in progress....')
    }
    return (
        <DialogModal 
            {...props} 
            title="Alfie" 
            description="im a description...." 
            primaryButton="Submit" 
            handlePrimaryAction={() => handlePrimary()}
            secondaryButton="Skip"
            loading={tuning.loading}>
                
                <FormControl className={classes.formControl}>
                <InputLabel htmlFor="age-simple">Methods</InputLabel>
                <Select
                    value={state.age}
                    onChange={handleChange('age')}
                    input={<Input id="age-simple" />}
                >
                    <MenuItem value="">
                    <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                </FormControl>

                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel component="legend">Gender</FormLabel>
                    <RadioGroup
                    aria-label="Gender"
                    name="gender1"
                    className={classes.group}
                    value={value}
                    onChange={handleRadChange}
                    >
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
                    <FormControlLabel
                        value="disabled"
                        disabled
                        control={<Radio />}
                        label="(Disabled option)"
                    />
                    </RadioGroup>
                </FormControl>
        </DialogModal>
    )
}

export default Finetune;