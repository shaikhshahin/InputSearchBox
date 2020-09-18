import React, { Component } from 'react';
import { View, Text, FlatList, TextInput, ListItem } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      value: '',
    };

    this.arrayNew = [
      {
        "id": "123-s2-546",
        "name": "John Jacobs",
        "items": ["bucket", "bottle"],
        "address": "1st Cross, 9th Main, abc Apartment",
        "pincode": "5xx012"
      },
      {
        "id": "123-s3-146",
        "name": "David Mire",
        "items": ["Bedroom Set"],
        "address": "2nd Cross, BTI Apartment",
        "pincode": "4xx012"
      },
      {
        "id": "223-a1-234",
        "name": "Soloman Marshall",
        "items": ["bottle"],
        "address": "Riverbed Apartment",
        "pincode": "4xx032"
      },
      {
        "id": "121-s2-111",
        "name": "Ricky Beno",
        "items": ["Mobile Set"],
        "address": "Sunshine City",
        "pincode": "5xx072"
      },
      {
        "id": "123-p2-246",
        "name": "Sikander Singh",
        "items": ["Air Conditioner"],
        "address": "Riverbed Apartment",
        "pincode": "4xx032"
      },
      {
        "id": "b23-s2-321",
        "name": "Ross Wheeler",
        "items": ["Mobile"],
        "address": "1st Cross, 9th Main, abc Apartement",
        "pincode": "5xx012"
      },
      {
        "id": "113-n2-563",
        "name": "Ben Bish",
        "items": ["Kitchen Set", "Chair"],
        "address": "Sunshine City",
        "pincode": "5xx072"
      },
      {
        "id": "323-s2-112",
        "name": "John Michael",
        "items": ["Refrigerator"],
        "address": "1st Cross, 9th Main, abc Apartement",
        "pincode": "5xx012"
      },
      {
        "id": "abc-34-122",
        "name": "Jason Jordan",
        "items": ["Mobile"],
        "address": "Riverbed Apartment",
        "pincode": "4xx032"
      }
    ];
  }

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '100%',
          backgroundColor: '#CED0CE',
        }}
      />
    );
  };

  searchItems = text => {
    let newData = this.arrayNew.filter(item => {
      const itemName = `${item.name.toUpperCase()}`;
      const itemID = `${item.id}`;
      const itemAddress = `${item.address.toUpperCase()}`;

      const textData = text.toUpperCase();
    if(text.length >0 ){
      return itemName.indexOf(textData) > -1 
      || itemID.indexOf(textData) > -1
      || itemAddress.indexOf(textData) > -1;
    }
    });
    this.setState({
      data: newData,
      value: text,
    });
  };

  renderHeader = () => {
    return (
      <TextInput
        style={{ height: 60, borderColor: '#000', borderWidth: 1 }}
        placeholder="   Search User By Name, id, address..."
        onChangeText={text => this.searchItems(text)}
        value={this.state.value}

      />
    );
  };
  ListEmpty = () => {
    return (
      //View to show when list is empty
      <View style={{
        flex: 1,
        padding: 25,
        width: '98%',
        alignSelf: 'center',
        justifyContent: 'center',
      }}>
        <Text style={{ textAlign: 'center' }}>No User Found</Text>
      </View>
    );
  };


  render() {
    return (
      <View
        style={{
          flex: 1,
          padding: 25,
          width: '98%',
          alignSelf: 'center',
          justifyContent: 'center',
        }}>
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => (
            <Text style={{ padding: 10 }}>{item.name}
             </Text>
          )}
          keyExtractor={item => item.name}
          ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderHeader}
          ListEmptyComponent={this.ListEmpty}
          //Message to show for the Empty list

        />
        
      </View>
    );
  }
}


export default App;
