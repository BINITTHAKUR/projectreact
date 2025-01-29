 import TextInputForm from "./TextInputForm";
 function TextInputFormContainer(){
function handleFormSubmit(event){
event.preventDefault();
console.log('form submitted');


}
function handleTextInputChange(event){
console.log('text input changed');
console.log(event.target.value);

}
  return  TextInputForm(

    <TextInputForm
     handleFormSubmit={handleFormSubmit}
     handleTextInputChange={handleTextInputChange}
    />
  );

 }
 export default TextInputFormContainer;