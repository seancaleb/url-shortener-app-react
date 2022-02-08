import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Button, Flex, Spinner, Text } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import GeneratedLink from "../GeneratedLink/GeneratedLink";
import LinkInput from "../LinkInput/LinkInput";
import Toast from "../Toast/Toast";
import { axiosConfig, baseUrl } from "../api";
import { buttonProps } from "../propStyles";
import { urlInputProps, slashtagInputProps } from "./data";
import {
  wrapperProps,
  flexProps,
  buttonContainerProps,
  extendedTextProps,
  spinnerProps,
  textSpinnerContainerProps,
} from "./propStyles";

const LinkForm = () => {
  const [url, setUrl] = useState("");
  const [slashtag, setSlashtag] = useState("");
  const [newUrl, setNewUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const toast = useToast();

  const handleOnClick = async () => {
    const bodyData = { destination: url, slashtag: slashtag };
    try {
      setIsLoading(true);
      const response = await axios.post(baseUrl, bodyData, axiosConfig);
      const data = await response.data;
      setIsLoading(false);

      setNewUrl(data.shortUrl);
      toast({
        isClosable: true,
        duration: 2000,
        position: "bottom",
        render: () => <Toast />,
      });
    } catch (err) {
      handleError(err);
    }
  };

  const handleError = (err) => {
    const { property } = err.response.data.errors[0];

    if (property === "destination") {
      setError("Invalid URL format.");
    } else if (property === "slashtag") {
      setError("Slashtag already exists.");
    } else {
      setError("An error occured.");
    }

    setIsLoading(false);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      newUrl && setNewUrl(null);
      error && setError(null);
    }, 8000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [newUrl, error]);

  return (
    <>
      <Box {...wrapperProps}>
        <Flex {...flexProps}>
          <LinkInput {...urlInputProps} data={url} setData={setUrl} />
          <LinkInput
            {...slashtagInputProps}
            data={slashtag}
            setData={setSlashtag}
          />
        </Flex>
        <Flex {...buttonContainerProps}>
          <Button {...buttonProps} onClick={handleOnClick}>
            {isLoading && (
              <Flex {...textSpinnerContainerProps}>
                <Text {...extendedTextProps}>Converting</Text>
                <Spinner {...spinnerProps} />
              </Flex>
            )}
            {!isLoading && <Text {...extendedTextProps}>Convert</Text>}
          </Button>
        </Flex>
      </Box>
      <GeneratedLink data={newUrl} wrapperProps={wrapperProps} />
      <GeneratedLink data={error} wrapperProps={wrapperProps} />
    </>
  );
};

export default LinkForm;
