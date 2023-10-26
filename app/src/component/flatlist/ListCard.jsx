import React from 'react';
import { StyleSheet, Image, View, Text, TouchableOpacity } from 'react-native';

import str from '../../localized/strings';

function ListCard({info, action}) {
      const handleClick = () => {
            const obj = {
                  ...info, 
                  picture: str.server + info.picture,
                  created: formatDate(info.created)
            };
            action(obj);
      }

      const formatDate = (param) => {
            const data = new Date(param);

            const day = data.getDate().toString().padStart(2, '0');
            const month = (data.getMonth() + 1).toString().padStart(2, '0');
            const year = data.getFullYear().toString().substr(-2);

            return `${day}/${month}/${year}`;
      }

      return (
            <TouchableOpacity style={styles.container} onPress={handleClick}>
                  <Image style={styles.img} source={{uri: str.server + info.picture}} />
                  <View style={styles.info}>
                        <View style={styles.content}>
                              <Text style={styles.text}>
                                    {`${info.adress}\n${info.hour} ${formatDate(info.created)}`}
                              </Text>
                        </View>
                  </View>
            </TouchableOpacity>
      )
}

const styles = StyleSheet.create({
      container: {
            width: '100%',
            marginBottom: 20,
            flexDirection: 'row',
            backgroundColor: '#FFFFF0',
      },
      img: {
            backgroundColor: 'green',
            width: 130,
            height: 110,
            borderTopRightRadius: 20,
            borderBottomRightRadius: 20
      },
      info: {
            flexDirection: 'column',
            height: '100%',
            flexGrow: 1,
      },
      content: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
      },
      text: {
            color: 'black',
            fontWeight: '800',
            fontSize: 16,
            textAlign: 'center'  
      }
})

export default ListCard;