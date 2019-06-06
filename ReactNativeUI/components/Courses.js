import React, { Component } from 'react';
import { View, StyleSheet, TextInput, Text, Image, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {List, ListItem} from 'react-native-elements'


export default class Courses extends Component {
	constructor(props) {
		super(props);
		this.state = {
			courses: [ 
				{
					course:"Design Basics",
					unit:"Learn design basics",
					avatar_url:require('../assets/images/tube.png')
				} ,
				{
					course:"Design Basics",
					unit:"Learn design basics",
					avatar_url:require('../assets/images/tube.png')
				} ,
				{
					course:"Design Basics",
					unit:"Learn design basics",
					avatar_url:require('../assets/images/tube.png')
				} ,
				{
					course:"Design Basics",
					unit:"Learn design basics",
					avatar_url:require('../assets/images/tube.png')
				} ,
				{
					course:"Design Basics",
					unit:"Learn design basics",
					avatar_url:require('../assets/images/tube.png')
				} ,
				{
					course:"Design Basics",
					unit:"Learn design basics",
					avatar_url:require('../assets/images/tube.png')
				} ,
				{
					course:"Design Basics",
					unit:"Learn design basics",
					avatar_url:require('../assets/images/tube.png')
				} ,
				{
					course:"Design Basics",
					unit:"Learn design basics",
					avatar_url:require('../assets/images/tube.png')
				} ,
			]
		};
	}

			keyExtractor = (item, index) => index.toString()

					renderItem = ({item}) =>(
						<TouchableOpacity>
						<ListItem
						leftAvatar={{source:item.avatar_url,style:{width:20,height:20}}}
						title={item.course}
						titleStyle={{color:'#24365f', fontSize:18}}
						subtitle={item.unit}
						chevron
						subtitleStyle={{color: 'rgba(0,0,0,.2)'}}
					/>
						</TouchableOpacity>
					)

					renderSeparator = ()=>{
						return(
							<View
								style={{
									height:1,
									width:'86%',
									backgroundColor:'#CED0CE',
									marginLeft:'14%'
								}}
							/>
						)
					}

					renderHeader = () =>{
						return(
					<View style={{ backgroundColor: '#e8e8e8', flex: 1 }}>
						<View style={{ flexDirection: 'row', paddingTop: 40, paddingLeft: 40, height: 170 }}>
							<View style={{ marginRight: 130 }}>
								<Text style={{ fontSize: 30, fontWeight: '500', color: '#24365f' }}>Find your </Text>
								<Text style={{ fontSize: 30, fontWeight: '500', color: '#24365f' }}>match courses </Text>
								<Text style={{ color: 'rgba(0,0,0,.2)', fontSize: 18, fontWeight: '400' }}>12 courses available</Text>
					</View>
					<Image
						source={require('../assets/images/profile.png')}
						style={{ width: 50, height: 50, borderRadius: 20 }}
					/>
						</View>
					</View>
						)
					}

	render() {
		return (
			<FlatList
				keyExtractor={this.keyExtractor}
				data={this.state.courses}
				renderItem={this.renderItem}
				ItemSeparatorComponent={this.renderSeparator}
				ListHeaderComponent={this.renderHeader}
			/>	
					
		);
	}
}
