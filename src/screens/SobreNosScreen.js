import { Button , View , StyleSheet , Text} from 'react-native';

const SobreNosScreen = ({navigation}) =>{
    return(
        <View style={styles.container}>
            <h1>Sobre Nós</h1>
            <br></br> <Text>Dev - Luquinas,17 anos, porém a maturidade de um adulto de 40,vocÊ quer um codigo?😎 </Text> <br></br>
            <br></br> <Text>Dev - Deborah,20 anos, desenvolvedora de segunda a quinta,Sexta nem me chama para trabalhar,vocÊ quer farriar?😜 </Text> <br></br>
            <br></br> <Text>Dev - Vini,25 anos, posso te dar um código em forma de anabolizantes,vocÊ quer uma dose de DECA??💪🏻 </Text> <br></br>
            <Button
                title='Home'
                onPress={ () =>navigation.navigate('Home')}
            />
        </View>
    );
}

export default SobreNosScreen

const styles = StyleSheet.create({
        container:{
        flex:1,
        backgroundColor : "#fff",
        alignItems : "center",
        justifyContent : "center"
    }
})