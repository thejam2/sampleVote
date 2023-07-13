import { TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const TitleSample = ({ preViewState, formDataHandle }) => {
    const [title, setTitle] = useState("");
    const titleChangeHandle = (e) => {
      setTitle(e.target.value);
      formDataHandle('voteTitle', e.target.value);
    };
    let storeState = useSelector((state) => state.formData);
    useEffect(() => {
      if (storeState.length !== 0) {
        setTitle(storeState[0].voteTitle);
      }
    }, []);
  
    if (preViewState) {
      return <h1>{title}</h1>;
    } else {
      return (
        <TextField
          label="설문 Title Sample"
          variant="standard"
          style={{ width: "95%" }}
          InputProps={{
            readOnly: preViewState,
          }}
          value={title}
          onChange={titleChangeHandle}
        />
      );
    }
  };

  export default TitleSample;