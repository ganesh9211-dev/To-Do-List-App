import React,{useState} from 'react'
import {ListItemText,ListItem,Button,Container,Table,TableRow,TableCell,Modal,TableBody,IconButton} from '@material-ui/core';
import db from './firebase';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import {makeStyles} from '@material-ui/core/styles';
import EditIcon from '@material-ui/icons/Edit';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import { AddCircleOutlineRounded } from '@material-ui/icons';





const useStyles = makeStyles((theme) => ({
    paper: {
            position: 'absolute',
            width: 600,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    },

    modal: {
            display: 'flex',
            padding: theme.spacing(1),
            alignItems: 'center',
            justifyContent: 'center',
    },

    TextField: {
                '& > *': {
                margin: theme.spacing(1),
                width: '65ch',
                },
    },
      
    }));



function Todo(props) {
    const classes= useStyles();
    const[open,setOpen]=useState(false);
    const [input,setInput]=useState();
    const [line,setLine]=useState(false);
     
    
//this will keep the checkbox checked and line will go through the text if the box is checked
     const handleChange = (event) => {  
        if (event.target.checked) {
            setLine(true);
              return;
          }
         
       setLine(false);
    }

   
//update the todo with new input text
    const updateTodo=()=> {
         db.collection('todos').doc(props.todo.id).set({
        todo: input
        },{merge:true})
        setOpen(false);
    }

    
    return (
        <div>
        <Container className={classes.container} maxWidth="md">
            <Table> 

                <Modal
                        className={classes.modal}
                        open={open}
                         onClose={e=> setOpen(false)}
                      
                        
                    >
                            <div className={classes.paper}>
                                <h1>EDIT TASK </h1>

                                <TextField 
                                    className={classes.TextField}
                                    id="outlined-basic"
                                    variant="outlined"
                                    placeholder={props.todo.todo}
                                    value={input}
                                    onChange={event=>setInput(event.target.value)}
                                />
                            
                               
                                <Button 
                                variant="contained" 
                                color="primary"
                                fullWidth
                                type="submit"
                                startIcon={<AddCircleOutlineRounded />}
                                onClick={updateTodo}>
                                 Update Task</Button>

                            </div>
                </Modal>

                
                <TableBody>
                
                        <TableRow>

                                <TableCell>
                                    <ListItem>
                                    
                                             <Checkbox
                                                onChange={handleChange}
                                                color="primary"
                                                inputProps={{ 'aria-label': 'uncontrolled-checkbox' }}
                                                disableRipple
                                               
                                                /> 

                                              <ListItemText style={{textDecoration:line ? "line-through": "none"}}   > {props.todo.todo}</ListItemText>
                                                
                                                <IconButton  >
                                                    <EditIcon   align="right" onClick={e=>setOpen(true)}> Edit</EditIcon>
                                                </IconButton>  

                                                <IconButton>
                                                    <DeleteForeverIcon align="right"  onClick={event => db.collection('todos').doc(props.todo.id).delete()} />  
                                                </IconButton>  

                                    </ListItem>
                                </TableCell> 

                         </TableRow>
                                       
                 </TableBody>         
            
            </Table>

        </Container>

        </div>
    )
   
}       

export default Todo
