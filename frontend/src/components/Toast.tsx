import { useEffect } from "react";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';


type ToastProps = {
    message: string;
    type: "SUCCESS" | "ERROR";
    onClose: () => void;
}

const Toast = ({message,type,onClose}:ToastProps) =>{

    useEffect(()=>{
        const timer = setTimeout(()=> {
            onClose();
        },5000)

        return ()=> {
            clearTimeout(timer);
        }
    }, [onClose])

    const styles = type === "SUCCESS"
        ? "fixed top-4 right-4 z-50 p-4 rounded-md bg-green-500 text-white max-w-md"
        : "fixed top-4 right-4 z-50 p-4 rounded-md bg-red-500 text-white max-w-md"

    return(
        <div className={styles}>
            <div className="flex justify-center items-center">
                {type === "SUCCESS" ? <CheckCircleOutlineIcon/> : <HighlightOffIcon/>}
                <span className="text-md font-semibold ml-3">{message}</span>
            </div>
        </div>
    )
}

export default Toast;