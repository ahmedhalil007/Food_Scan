import React, {useState} from 'react';
import { Text, StyleSheet, View, Image, ScrollView, Button } from 'react-native';
import Background from './Bckgrnd';


const Meals = () => {

        const [showMore, setShowMore] = useState(false);
      
        const toggleShowMore = () => {
          setShowMore(!showMore);
        };
      
        return (

    <Background>
      <View style={styles.container1}>
        <Text style={{ color: '#ff5757', fontSize: 28, bottom: -35, fontWeight: 'bold' }}>
        Southern Blackberry Cobbler
        </Text>
      </View>

      <View>
        <Image source={require('./assets/cobbler.jpeg')} style={styles.pancakes} />
      </View>

<View style={{ bottom:-130, }}>
          <ScrollView contentContainerStyle={{ flexGrow: 1,}}>

          <View style={{backgroundColor:'#f8dead', borderRadius:10, }}>
         
            <View style={{ flex: 1, }}>
              <Text>
              This southern-style Vegan Blackberry Cobbler recipe is simple and easy to make with only 7 ingredients for a 
              deliciously healthy snack or dessert everyone will love!
              </Text>
              
              {showMore && (
                <Text>
                Flour – Here, I used unbleached all-purpose flour.
                 I’ve also tested this with spelt flour, which turned out great.
                </Text>
              )}
            </View>
      
            <Button title={showMore ? 'Show Less' : 'Show More'} onPress={toggleShowMore} 
                color={showMore ? '#ff5757' : '#ff5757'}
            />
           
            </View>
          </ScrollView>

    </View>
     </Background>
        );
      };

const styles = StyleSheet.create({
  container1: {
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,
    backgroundColor: '#f8dead',
    width: 420,
    height: 80,
    alignItems: 'center',
  },
  pancakes: {
    borderRadius: 20,
    alignItems: 'center',
    width: 330,
    height: 330,
    resizeMode: 'stretch',
    top: 80,
  },

});

export default Meals;