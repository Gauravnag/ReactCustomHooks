import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const notify = () => {
  toast("Wow so easy!");
  toast.success('🦄 Wow so easy!', { position: "top-right", });
  toast.warn('🦄 Wow so easy!', { position: "bottom-center", });
  toast.error('🦄 Error', { position: "bottom-right", });
  }

    return(
        <>
        <button onClick={notify}>Toastify!</button>
        <ToastContainer />
        </>
    )
}
export default App;