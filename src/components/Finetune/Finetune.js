import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Select from '@material-ui/core/Select';
import lightBlue from '@material-ui/core/colors/lightBlue';
import { makeStyles } from '@material-ui/core/styles';
import React, { useContext, useEffect, useState } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useCalcMethods } from '../../hooks/api-hooks';
import { UserContext } from '../../store/context/userContext';
import DialogModal from '../Modal';
import {FT_PRAYER} from '../../utils/constants';



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
    progress: {
      margin: theme.spacing(2),
      color: lightBlue[500]
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
    const [methods] = useCalcMethods();
    const {setForceTrigger, setModal} = useContext(UserContext);
    const initialState = {
      description : "Would you like to alter your current settings for better accurate results?",
      title : "Finetune your Preferences", 
      primaryButton : "Save",
      secondaryButton : "Skip",
      error : false,
      loading: false
    };
    const [modalConfig, setModalConfig] = useState(initialState)
    useEffect(() => {
      if (methods.hasOwnProperty('error')) {
        setModalConfig({...modalConfig, 
          description : "We are experiencing some issues. Please try after sometime.",
          secondaryButton : "Ok",
          primaryButton : "",
          error : true
        })
      }
    }, [methods])
    const [calcMethod, setCalcMethod] = useState(props.method);
    const classes = useStyles();
    const handleChange = name => event => {
        setCalcMethod(Number(event.target.value));
    };

    const [schoolVal, setSchoolVal] = useState(props.school);
    function handleRadChange(event) {
      setSchoolVal(parseInt(event.target.value));
    }
    
    const handlePrimary = () => {
        setModalConfig({...modalConfig, loading : true})
        localStorage.setItem('padachone:method', calcMethod)
        localStorage.setItem('padachone:school', schoolVal);
        props.handleForceTrigger({target: FT_PRAYER, method : calcMethod, school : schoolVal});
        // setForceTrigger(() => {          
        //   return {target: FT_PRAYER, method : calcMethod, school : schoolVal}
        // });
        setModal({show : false, name : ''});
        //window.location.reload();        
    }

    const handleSecondary = () => {
      setModalConfig(initialState)
    }
    return (
        <DialogModal 
            {...props} 
            error={modalConfig.error}
            title={modalConfig.title} 
            description={modalConfig.description} 
            primaryButton={modalConfig.primaryButton?modalConfig.primaryButton:null} 
            handlePrimaryAction={() => handlePrimary()}
            secondaryButton={modalConfig.secondaryButton}
            handleSecondaryAction={() => handleSecondary()}
            loading={modalConfig.loading}>
                {(methods.hasOwnProperty('data') && methods.data.length)
                  ?<div>                   
                  <FormControl className={classes.formControl} style={{maxWidth: '100%', minWidth: '235px'}}>
                  <InputLabel htmlFor="age-simple">Calculation Methods</InputLabel>
                  <Select
                      value={calcMethod}
                      onChange={handleChange('age')}
                      input={<Input id="age-simple" />}
                  >
                      {/* <MenuItem key="none" value="">
                      <em>None</em>
                      </MenuItem> */}
                      {/* {methods.hasOwnProperty('data') && methods.data.length && <DDitems methods={methods.data}/>} */}
                      {
                        methods.data.map((item, indx) => {
                          let objVal = Object.values(item)[0],
                            objKey = Object.keys(item)[0];
                        return <MenuItem key={indx} value={objVal.id} data-label={objKey}>{objVal.name}</MenuItem>
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
                      value={schoolVal}
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
                </div>
                  :<div style={{textAlign: 'center'}}>
                    <CircularProgress className={classes.progress} color="secondary" />
                  </div>
                }
        </DialogModal>
    )
}

export default Finetune;