"use client";
import { Box, Text, TextInput, Button } from "@mantine/core";
import { useForm, isEmail, hasLength } from "@mantine/form";

export default function Book() {
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validate: {
      name: hasLength({ min: 2, max: 10 }, "Name must be 2-10 characters long"),
      email: isEmail("Invalid Email"),
    },
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(
      "name",
      form.values.name,
      "email",
      form.values.email,
      "message",
      form.values.message
    );
    form.reset();
  };

  return (
    <Box maw={320} mx="auto">
      <Text>Book here!</Text>
      <form onSubmit={handleSubmit}>
        <TextInput
          mt="md"
          label="Name"
          placeholder="Name"
          {...form.getInputProps("name")}
          withAsterisk
        />
        <TextInput
          mt="md"
          label="Email"
          placeholder="Email"
          {...form.getInputProps("email")}
          withAsterisk
        />
        <TextInput
          mt="md"
          label="Message"
          placeholder="Message"
          {...form.getInputProps("message")}
          withAsterisk
        />
        <Button type="submit" variant="outline">
          Submit
        </Button>
      </form>
    </Box>
  );
}
