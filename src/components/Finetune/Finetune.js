import React, {useContext} from 'react';
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
import {UserContext} from '../../store/context/userContext';

const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    group: {
      margin: theme.spacing(1, 0),
      flexDirection: 'row'
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

const DDitems = ({methods}) => {
  return (
    <>
    {
     methods.map(item => {
       console.log('AB', Object.values(item)[0].id)
      return <MenuItem key={item.id} value={Object.values(item)[0].id}>{Object.values(item)[0].name}</MenuItem>
    })
    }
    </>
  )
}
  
const Finetune = (props) => {
  console.table(props);

    const [methods, setMethods] = useCalcMethods();
    const {setForceTrigger, setModal} = useContext(UserContext);
    console.table(methods);
    const [state, setState] = React.useState({
        open: false,
        age: props.method
      });
      const classes = useStyles();
    const handleChange = name => event => {
      debugger;
        setState({ ...state, [name]: Number(event.target.value) });
    };

    const [value, setValue] = React.useState(props.school);
    console.log('ALFIE', value === props.school)
  function handleRadChange(event) {
    setValue(parseInt(event.target.value));
  }
    const [tuning, setTuning] = React.useState({
        loading: false, 
      });
    const handlePrimary = () => {
        setTuning({...tuning, loading : true})
        console.log('FT Primary Action in progress....', state.age, value);
        debugger;
        localStorage.setItem('padachone:method', state.age)
        localStorage.setItem('padachone:school', value)
        setForceTrigger(() => {          
          return {target: 'api_usePrayer', method : state.age, school : value}
        });
        setModal({show : false, name : ''});
        
    }
    return (
        <DialogModal 
            {...props} 
            title="Finetune your Preferences" 
            description="Would you like to save couple extra settings for better accurate results?" 
            primaryButton="Save" 
            handlePrimaryAction={() => handlePrimary()}
            secondaryButton="Skip"
            loading={tuning.loading}>
                
                <FormControl className={classes.formControl} style={{maxWidth: '255px', minWidth: '255px'}}>
                <InputLabel htmlFor="age-simple">Calculation Methods</InputLabel>
                <Select
                    value={state.age}
                    onChange={handleChange('age')}
                    input={<Input id="age-simple" />}
                >
                    <MenuItem key="none" value="">
                    <em>None</em>
                    </MenuItem>
                    {/* {methods.hasOwnProperty('data') && methods.data.length && <DDitems methods={methods.data}/>} */}
                    {
                      methods.hasOwnProperty('data') && methods.data.length && 
                      methods.data.map((item, indx) => {
                        console.log('AB', Object.keys(item)[0])
                       return <MenuItem key={indx} value={Object.values(item)[0].id} data-label={Object.keys(item)[0]}>{Object.values(item)[0].name}</MenuItem>
                     })
                    }
                    {/* <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem> */}
                </Select>
                </FormControl>

                <FormControl component="fieldset" className={classes.formControl}>
                  {/* <FormLabel component="legend">School</FormLabel> */}
                  <RadioGroup
                    aria-label="gender"
                    name="gender2"
                    className={classes.group}
                    value={value}
                    onChange={handleRadChange}
                  >
                    <FormControlLabel
                      value={0}
                      control={<Radio color="primary" />}
                      label="Shafi"
                      labelPlacement="start"
                    />
                    <FormControlLabel
                      value={1}
                      control={<Radio color="primary" />}
                      label="Hanafi"
                      labelPlacement="start"
                    />
                  
                    {/* <FormControlLabel
                      value="disabled"
                      disabled
                      control={<Radio />}
                      label="(Disabled option)"
                      labelPlacement="start"
                    /> */}
                  </RadioGroup>
                </FormControl>
        </DialogModal>
    )
}

export default Finetune;