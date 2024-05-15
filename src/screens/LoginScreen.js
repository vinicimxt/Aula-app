import { Button , View , StyleSheet , Text} from 'react-native';
import { TextInput } from 'react-native-web';

const LoginScreen = ({navigation}) =>{
  /*  const username = email
    const senha =
    if (email == null && password == null) {
        <text>Você não inseriu nada</text>
    } else {
        <Button
            title='Acessar'
            onPress={ () =>navigation.navigate('Home')}
        />
        */
    
    return(
        <View style={styles.container}>
            <Text>Você está em Login</Text>

        <form>
            <br></br>
            <label>Email</label>
            <input type='email' formAction='email'></input>
            <br></br>
            <label>Senha</label>
            <input type='password'></input>
            <br></br>
            <button type="submit" >Enviar</button>
         </form>
         <Button
            title='Acessar'
            onPress={ () =>navigation.navigate('Home')}
        />
            <br></br>
             <Button
                title='Cadastro'
                onPress={ () =>navigation.navigate('Cadastro')}
            />          
            
        </View>
    );
}

export default LoginScreen

const styles = StyleSheet.create({
        container:{
        flex:1,
        backgroundColor : "#fff",
        alignItems : "center",
        justifyContent : "center",
        
    }
})