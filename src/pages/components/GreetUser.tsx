const GreetUser = (props:greetUserProps) => {
    return(
        <p>Good Morning {props.name}!</p>
    )
}
export default GreetUser;

interface greetUserProps {
    name : string;
}