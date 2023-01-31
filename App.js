import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, FlatList, Image, SafeAreaView } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [table, setTable] = useState(false);
  const data = [
    {
      id: 1,
      name: 'Trần quân',
      mt: 'Tạm',
      image: require('../../../ReacNative/LabRe/CP17301Re/assets/avatar/shiy.png')
    },
    {
      id: 2,
      name: 'Quân',
      mt: 'tốt',
      image: require('../../../ReacNative/LabRe/CP17301Re/assets/avatar/shiy.png')

    }, {
      id: 3,
      name: 'Quang',
      mt: 'Bthuong',
      image: require('../../../ReacNative/LabRe/CP17301Re/assets/avatar/shiy.png')

    },
  ];

  const onePerson = ({ item }) => (
    <View style={styles.item}>
      <View style={styles.avatar}>
        <Image loadingIndicatorSource={item.image} style={styles.image} />
      </View>
      <View>
        <Text>{item.name}</Text>
      </View>
      <View>
        <Text>{item.mt}</Text>
      </View>


    </View>

  )

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Họ tên: Trần Minh Quân</Text>
      <Text style={styles.text}>MSV: Ph19466</Text>
      <Button
        title={'Thêm Mơí'}
        onPress={() => setTable(!table)}
      />
      {
        table
          ? <>
            <View>
              <TextInput placeholder="Tên: "></TextInput>
              <TextInput placeholder="Mô tả:"></TextInput>
              <TextInput placeholder="Link ảnh:"></TextInput>

              <View style={styles.butV}>
                <Button title='Thêm' />
                <Button title='Huỷ' onPress={() => setTable(!table)} />
              </View>

            </View>
          </>
          : null
      }

      <View style={styles.flatlist}>
        <FlatList
          data={data}
          renderItem={onePerson}
          keyExtractor={data => data.id}

        />
      </View>
      <StatusBar style="auto" />
    </View>
  );

  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    flatlist: {
      width: 100
    },
    item:{
      backgroundColor :"#CCC"
    },
    avatar: {
      width: 15
    },
    image:{
      width :20,
      height :6
    }
   
  });
