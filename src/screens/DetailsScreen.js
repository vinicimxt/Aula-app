import { Button , View , StyleSheet , Text} from 'react-native';

const DetailsScreen = ({navigation}) =>{
    return(
        <View style={styles.container}>
            <Text>Você está em detalhes</Text>
            <Button
                title='Home'
                onPress={ () =>navigation.navigate('Home')}
            />
        </View>
    );
}

export default DetailsScreen

const styles = StyleSheet.create({
        container:{
        flex:1,
        backgroundColor : "#fff",
        alignItems : "center",
        justifyContent : "center"
    }
})