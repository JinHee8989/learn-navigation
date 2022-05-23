import React from 'react';
import {View, Text, Button} from 'react-native';
import {useEffect} from 'react/cjs/react.development';
import {SafeAreaView} from 'react-native-safe-area-context';

function HeaderlessScreen({navigation}) {
  useEffect(() => {
    navigation.setOptions({title: '홈'});
  }, [navigation]);

  return (
    <SafeAreaView>
      <View>
        <Text>Header가 없다</Text>
        <Button title="뒤로가기" onPress={() => navigation.pop()} />
      </View>
    </SafeAreaView>
  );
}

export default HeaderlessScreen;
