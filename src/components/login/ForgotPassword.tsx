const styles = {
  color: 'black',
  fontSize: '25px',
  cursor: 'pointer',
  
}


export const ForgotPassword: React.FC = () => {
  const handleClick = (): void => {
    console.log("to be continued");
  };

  return <span onClick={handleClick} style={{...styles}}>Forgot password?</span>;
};
