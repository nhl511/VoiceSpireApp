import React, { useState, useEffect, useRef } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Audio } from "expo-av";
import { Feather } from "@expo/vector-icons";
import tw from "twrnc";
const AudioPlayer = ({ link }) => {
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [position, setPosition] = useState(0);

  const soundObject = useRef(null);

  useEffect(() => {
    loadAudio();
  }, []);

  async function loadAudio() {
    try {
      const { sound, status } = await Audio.Sound.createAsync({ uri: link });
      setSound(sound);
      setDuration(status.durationMillis / 1000);
      soundObject.current = sound;
    } catch (error) {
      console.error("Error loading the audio:", error);
    }
  }

  async function playSound() {
    if (soundObject.current) {
      await soundObject.current.playAsync();
      setIsPlaying(true);
    }
  }

  async function pauseSound() {
    if (soundObject.current) {
      await soundObject.current.pauseAsync();
      setIsPlaying(false);
    }
  }

  // Update position (count time) every second
  useEffect(() => {
    const interval = setInterval(async () => {
      if (isPlaying && soundObject.current) {
        const status = await soundObject.current.getStatusAsync();
        if (status.isLoaded) {
          setPosition(status.positionMillis / 1000);
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <View style={tw`flex-row gap-2 items-center`}>
      <TouchableOpacity onPress={isPlaying ? pauseSound : playSound}>
        <Feather name={isPlaying ? "pause" : "play"} size={40} />
      </TouchableOpacity>

      <View>
        <Text>
          {formatTime(position)}/{formatTime(duration)}
        </Text>
      </View>
    </View>
  );
};

export default AudioPlayer;
