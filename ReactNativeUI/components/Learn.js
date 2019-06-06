import React, { Component } from 'react';
import { View, StyleSheet, TextInput, Text, Image, TouchableOpacity, FlatList, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Courses from './Courses';


export default class Learn extends Component {
	constructor(props) {
		super(props);
		this.state = {
			courses: [
				{
					image: require('../assets/images/coding.png'),
                    course: 'Coding',
                    num:'12 courses'
				},
				{
					image: require('../assets/images/design.jpg'),
                    course: 'Design Thinking',
                    num:'9 courses'
				}
			]
		};
	}

	render() {
		return (
			<View style={{ backgroundColor: '#ffbb5f', flex: 1 }}>
				<ImageBackground style={{ width: 500, height: 400 }} source={require('../assets/images/bg.png')}>
					<View style={{ paddingTop: 60, paddingLeft: 20, marginBottom: 20 }}>
						<Text style={{ color: '#24365f', fontSize: 40 }}>Hey what would you like to learn Today?</Text>
					</View>
					<View
						style={{
							borderRadius: 40,
							width: 300,
							height: 50,
							backgroundColor: '#f7f9fb',
							marginLeft: 60,
							flexDirection: 'row',
							alignItems: 'center',
							paddingHorizontal: 10,
							marginBottom: 90
						}}
					>
						<View>
							<Icon name="search" size={20} />
						</View>
						<View>
							<TextInput style={{ width: 250, height: 40 }} placeholder="Search here" />
						</View>
					</View>
					<View style={{ backgroundColor: '#f7f9fb', height:500 }}>
						<View style={{ margin: 30, flexDirection: 'row', alignItems: 'center', paddingLeft: 20 }}>
							{this.state.courses.map((course) => {
								return (
                                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Courses')}>
									<View
										style={{
											width: 150,
											height: 180,
											backgroundColor: 'white',
											borderRadius: 20,
											marginRight: 15,
											alignItems: 'center',
											marginTop: -90,
											paddingTop: 20
										}}
									>
										<Image source={course.image} style={{ width: 100, height: 100, marginBottom:5 }} />
										<Text style={{ color: '#24365f', fontSize: 20,marginBottom:2 }}>{course.course}</Text>
                                        <Text style={{ color: 'rgba(0,0,0,.2)', fontSize: 14 }}>{course.num}</Text>
									</View>
                                    </TouchableOpacity>
								);
							})}
						</View>
					</View>
				</ImageBackground>
			</View>
		);
	}
}
