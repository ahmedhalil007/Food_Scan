import React, {useState}  from 'react';
import { View, Text,StyleSheet, SafeAreaView, FlatList, TouchableOpacity,Image, ScrollView} from 'react-native';
import Background from './Bckgrnd';

const Recipes = (props) => {
   const [dataSource] = useState([
    { id: '1', title: 'Southern Blackberry Cobbler',
    description: 'This southern-style Vegan Blackberry Cobbler recipe is simple and easy to make with only 7 ingredients for a deliciously healthy snack or dessert... ', 
    image: require('./assets/cobbler.jpeg') },
    { id: '2', title: 'Vegan Pumpkin Scones',
    description: 'Vegan Pumpkin Scones with maple glaze are made with simple ingredients and so easy to make! Bring in the cozy flavors of fall with these delicious...', 
    image: require('./assets/scones.jpeg') },
    { id: '3', title: 'Carrot Sweet Potato Soup',
    description: 'Carrot, Sweet Potato + Coriander Soup with roasted turmeric chickpeas is a quick and easy, healthy, and delicious soup to enjoy any time of year!...', 
    image: require('./assets/soup.jpeg') },
    { id: '4', title: 'Green Matcha Popcorn',
    description: 'Popcorn and green tea mashup! Green Matcha Popcorn made on the stovetop is a delicious change from the usual popcorn routine,...', 
    image: require('./assets/popcorn.jpeg') },
    { id: '5', title: 'Vegan Banana bread',
    description: 'This ‘tried and true’, classic vegan banana bread recipe is moist, healthy, and so easy to make. It’s egg & dairy free, has an oil-free option,...', 
    image: require('./assets/bread.jpeg') },
   ]);

   const ItemView = ({item}) => {
    return (
        <TouchableOpacity onPress={() => handleItemClick(item)}>
        <View style={styles.item}>
          <Image source={item.image} style={styles.image} />
          <View style={styles.itemContent}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
       </View>

        </View>
      </TouchableOpacity>
    )
   }

   const handleItemClick = (item) => {
    if (item.title === 'Southern Blackberry Cobbler') {
        props.navigation.navigate('Meals');
      }
    };

    return (
    <Background>
     <View>
        <View style={styles.container1}>
            <Text style={{color:"#ff5757", fontSize:35, bottom:-35, fontWeight:'bold'}}>Recipes</Text>
         </View>

         <SafeAreaView style={{flex:1}}>
        
            <FlatList
              data={dataSource}
              keyExtractor={(item) => item.id}
              renderItem={ItemView}
            />
          
        </SafeAreaView>
    </View>
    </Background>
    )
   
    }

const styles = StyleSheet.create ({

item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    marginVertical:20,
    marginLeft:25,
    backgroundColor:'#f8dead',
    width:360,
    height:180,
    opacity:0.8,
    borderRadius:10,
    top:15,
   
    
  },
  image: {
    width: 120,
    height: 120,
    marginRight: 13,
    resizeMode: 'stretch',
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  itemContent: {
    flex: 1,
   
  },
  description: {
    fontSize: 14,
    color: '#555555',
    marginTop: 8,
  },
 container1: {
    borderBottomEndRadius:30,
    borderBottomStartRadius:30,
    backgroundColor:'#f8dead',
    width:420,
    height:80,
    alignItems:'center',
 },

})
export default Recipes;