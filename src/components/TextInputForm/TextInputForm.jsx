import Button from '../button/button'; 
import TextInput from '../TextInput/TextInput';


function TextInputForm({handleFormSubmit,handleTextInputChange}){
return(
 <form>
<div>
    <TextInput
    
    label='enter a word or a phrase'
    placeholder='enter a word or a phrase'
    

    handleFormSubmit={handleFormSubmit}
     handleTextInputChange={handleTextInputChange}
    />
</div>
<div>
    <Button
    styleType='warning'
    text="show/hide"

    />
</div>
<div>
    <Button
    type="submit"
    styleType='primary'
    text="submit"

    />
</div>


 </form>



);


}

export default TextInputForm;