// SpeechSynthesis 컨트롤러로 텍스트 음성변환 보이스 가져오기
export const getVoices = () => {
  const synth = window.speechSynthesis;
  return new Promise((resolve) => {
    const voices = synth.getVoices();
    if (voices.length > 0) {
      resolve(voices);
    } else {
      synth.onvoiceschanged = () => {
        resolve(synth.getVoices());
      };
    }
  });
};

// 한문자씩 음성으로 읽어주는 tts 함수
export const speakCharacterByCharacter = async (text) => {
  const synth = window.speechSynthesis;
  const voices = await getVoices();
  // console.log("Available voices:", voices); // 사용 가능한 음성 목록 확인
  const voice = voices.find((v) => v.name === "Google 한국의");

  if (!voice) {
    console.error("Selected voice not found.");
    return;
  }

  const characters = text.split(""); // 텍스트를 끊어서 나누기

  for (const char of characters) {
    await new Promise((resolve) => {
      const utterance = new SpeechSynthesisUtterance(char);
      utterance.voice = voice;
      utterance.onend = resolve; // 한 문자를 읽는 단계가 끝나면 resolve 호출
      synth.speak(utterance);
    });
  }
};
