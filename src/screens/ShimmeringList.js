// ShimmeringList.js
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Shimmering from './Shimmering';

const ShimmeringList = ({ screenWidth }) => {
  const width = screenWidth * 0.92 - 30;

  const list = new Array(10).fill(undefined).map((val, index) => ({
    id: index,
    name: 'name',
  }));

  const renderList = () => {
    return list.map((val, index) => (
      <React.Fragment key={index}>
        <View style={{borderCurve:2}}>
        <View style={styles.profileWrapper}>
          <Shimmering wrapperStyle={{ width: 45, height: 45, borderRadius: 30 ,marginTop:4, }} />
          <View style={styles.profile}>
            <Shimmering
              wrapperStyle={{
                width: width * 0.2,
                height: 10,
                borderRadius: 4,
              }}
            />
            <Shimmering
              wrapperStyle={{
                width: width * 0.65,
                height: 11,
                borderRadius: 4,
                marginTop: 4,
              }}
            />
            <Shimmering
              wrapperStyle={{
                width: width * 0.4,
                height: 10,
                borderRadius: 4,
                marginTop:7
              }}
            />
          </View>
        </View>
        
          <Shimmering
            wrapperStyle={{
              borderRadius: 5,
              width: width * 0.93,
              height: 10,
              marginTop:15,
            }}
          />
        
        <View style={styles.postWrapper}>
          <Shimmering
            wrapperStyle={{
              borderRadius: 5,
              width: width * 0.8,
              height: 10,
              marginTop:10,
            }}
          />
        </View>
        <View style={styles.postWrapper}>
          <Shimmering
            wrapperStyle={{
              marginTop:5,
              borderRadius: 3,
              width: width * 0.93,
              height: 150,
              marginBottom:50,
            }}
          />
        </View>

        </View>
      </React.Fragment>
    ));
  };

  return (
    <ScrollView style={styles.container}>
      {renderList()}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
    marginHorizontal: 10,
  },
  profileWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profile: {
    marginHorizontal: 10,
  },
  postWrapper: {
    marginVertical: 10,
  },
});

export default ShimmeringList;
