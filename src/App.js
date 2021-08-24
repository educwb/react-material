import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

function App() {
  return (
    <div>

      <form noValidate autoComplete="off">
        <TextField id="standard-basic" label="Standard" />
        <TextField id="filled-basic" label="Filled" variant="filled" />
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </form>
      <br />
      <Button variant="contained" color="primary">
        Salvar
      </Button>

    </div>
  )
}

export default App
