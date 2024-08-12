import { Box, Button, Dialog, DialogContent, DialogTitle, TextField } from "@mui/material"

export const SingUp: React.FC = () => {
    return (
        //   <Button onClick={handleOpen}>Open modal</Button>
        <Box>
            <Dialog open={true} sx={{
                '& .MuiTextField-root': {
                    width: '500px',
                    marginBottom: '16px',
                },
            }}>
                <DialogContent>
                    <DialogTitle>Регистрация</DialogTitle>
                    <h4>Имя</h4>
                    <TextField
                        type="text"
                        placeholder="Имя"
                        required
                    />
                    <h4>Фамилия</h4>
                    <TextField
                        type="text"
                        placeholder="Фамилия"
                        required
                    /><h4>Email</h4>
                    <TextField
                        type="text"
                        placeholder="Email"
                        required
                    /><h4>Password</h4>
                    <TextField
                        type="text"
                        placeholder="Password"
                        required
                    />
                    <h4>Дата Рождения</h4>
                    <TextField
                        type="date"
                        placeholder="Дата Рождения"
                        required
                    />
                </DialogContent>
                <Button>Создать</Button>
                <Button>Отмена</Button>
            </Dialog>
           
        </Box>
  )
}
