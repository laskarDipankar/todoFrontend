import { useEffect, useState } from "react";
import axios from "axios";
// import { Outlet } from "react-router"
import {
  Box,
  Button,
  Typography,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  Modal,
  TextField,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import Pagination from "../Pagination/Pagination";
import AddTask from "./AddTask";

const TaskMoGallery = () => {
  const [Tasks, setTask] = useState([]);
  const [page, setpage] = useState(0);
  const [warn, setWarn] = useState(false);
  const [taskId, setTaskid] = useState();
  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState({
    name: "",
    description: "",
    deadline: Date,
    status: false,
  });

  useEffect(() => {
    axios
      .get(
        `https://taskmanagementtodo.herokuapp.com/api/tasks?skip=${page}&limit=9`
      )
      .then((res) => {
        console.log(res.data.data);
        setTask(res.data.data);
      });
  }, [page]);

  const getData = (data) => {
    setpage(data);
  };
  const taskDelete = async () => {
    await axios
      .delete(
        `https://taskmanagementtodo.herokuapp.com/api/tasks/${taskId}?sort={'dateCreated':-1}`
      )
      // axios.delete(`http://localhost:9999/api/tasks/${taskId}`)
      .then((res) => {
        alert(res.data.message);
      });
  };
  const handleChange = (e) => {
    setEdit((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    // console.log(edit)
  };

  const handleClickOpen = () => {
    setWarn(true);
  };

  const handleClose = () => {
    setWarn(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    // console.log(edit)
  };

  const updateTask = async () => {
    await axios
      .patch(`http://localhost:9999/api/tasks/${taskId}`, {
        name: edit.name,
        description: edit.description,
        deadline: edit.deadline,
        completed: edit.status,
      })
      .then((res) => {
        alert(res.data.message);
      });
  };

  return (
    <>
      <Dialog open={warn} onClose={handleClose}>
        <DialogTitle
          sx={{
            color: "red",
          }}
        >
          {"Warning"}
        </DialogTitle>
        <DialogContent>
          {
            "Deleting this will erase all the data of this user, are you sure you want to delete ."
          }
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Do not Delete</Button>
          <Button
            onClick={() => {
              {
                handleClose();
              }
              {
                taskDelete();
              }
            }}
            autoFocus
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
      <Box
        sx={{
          marginTop: "20%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap:0.5
        }}
      >
        {/* /////////////////////////////////////////////////////////////////////////////// */}

        <Modal open={open} onClose={() => setOpen(false)}>
          <Box
            sx={{
              maxWidth: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h6"
              component="div"
              sx={{
                width: "80%",
                height: "50%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                background: "white",
              }}
            >
              <form onSubmit={handleSubmit}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 2,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Box
                    // sx={{
                    //    display:'flex',
                    //   flexDirection:'column',
                    //   // gap:20,
                    //   justifyContent:'center',
                    //   alignItems:'center'
                    // }}
                    >
                      <TextField
                        //   onChange={handleChange}

                        name="name"
                        placeholder="Edit Name"
                      >
                        {edit.name}
                      </TextField>
                    </Box>
                    <Box>
                      <TextField
                        name="description"
                        placeholder="put description"
                        onChange={handleChange}
                      >
                        {edit.description}
                      </TextField>
                    </Box>
                    <Box>
                      <TextField
                        name="deadline"
                        placeholder="Enter Deadline"
                        onChange={handleChange}
                        type="date"
                      >
                        {edit.deadline}
                      </TextField>
                    </Box>

                    {/* <Button variant="contained" >save</Button> */}
                  </Box>
                  <Button
                    type="submit"
                    onClick={(e) => {
                      {
                        // setOpen(false);
                      }
                      {
                        updateTask();
                      }
                    }}
                  >
                    Submit !
                  </Button>
                </Box>
                <Button onClick={() => setOpen(false)}>close</Button>
              </form>
            </Typography>
          </Box>
        </Modal>

        {/* /////////////////////////////////////////////////////////////////////////////////////// */}
        <AddTask />
        <Pagination getData={getData} />

        {Tasks.map((item) => {
          return (
            <>
              <Box
                sx={{
                    // marginTop:'4%',
                    borderLeft:'6px solid green',
                  height: 100,
                  width: 290,
                  display: "flex",
                  alignItems: "center",
                  background:'rgba(	144, 238, 144,0.3)',
                  backdropFilter:'blur(20px)',
                }}
              >
                <NavLink
                  style={{
                    textDecoration: "none",
                    paddingLeft: "2%",
                  }}
                  to={`/tasks/${item._id}`}
                >
                  <Typography
                    sx={
                      {
                        //
                      }
                    }
                  >
                    Name <span>-</span>
                    {item.name}
                  </Typography>
                </NavLink>
                <Button
                size="small"
                  sx={{
                    marginLeft: "auto",
                  }}
                  onClick={() => {
                    {
                      handleClickOpen();
                    }
                    {
                      setTaskid(item._id);
                    }
                  }}
                >
                  Delete
                </Button>
                <Button
                size="small"
                  onClick={() => {
                    {
                      setOpen(true);
                    }
                  }}
                >
                  Edit
                </Button>
              </Box>
            </>
          );
        })}
      </Box>
    </>
  );
};
export default TaskMoGallery;
