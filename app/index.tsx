import "./installCrypto";

import QuickCrypto from "react-native-quick-crypto";
import { Buffer } from "@craftzdog/react-native-buffer";

import { Button, Text, View } from "react-native";
import { useState } from "react";
import { BinaryLike } from "react-native-quick-crypto/lib/typescript/src/Utils";

function pbkdf2Promise(
  password: BinaryLike,
  salt: BinaryLike,
  iterations: number,
  keylen: number,
  digest: string
): Promise<Buffer | undefined> {
  return new Promise((resolve, reject) => {
    QuickCrypto.pbkdf2(
      password,
      salt,
      iterations,
      keylen,
      digest,
      (err, derivedKey) => {
        if (err) {
          reject(err);
        } else {
          resolve(derivedKey);
        }
      }
    );
  });
}

export default function Index() {
  const [progress, setProgress] = useState("not started");

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>{progress}</Text>
      <Button
        title="start"
        onPress={async () => {
          try {
            setProgress("started");
            for (let i = 0; i < 5_000; i++) {
              setProgress(`progress: ${i + 1} / 5000`);
              await pbkdf2Promise(
                Buffer.from(
                  "kN9r6IhwcSpNevZAykdbj1pH+/wJ0D2VN6w2mkNhBf0=",
                  "base64"
                ),
                "someSalt",
                2000,
                108,
                "sha1"
              );
            }
            setProgress("done");
          } catch (e) {
            setProgress(`Error ${(e as any).message}`);
          }
        }}
      />
    </View>
  );
}
