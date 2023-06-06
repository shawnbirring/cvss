"use client";
import {
  createStyles,
  Header,
  Menu,
  Group,
  Center,
  Burger,
  Container,
  rem,
  Drawer,
  Text,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconChevronDown } from "@tabler/icons-react";
import { NavLink } from "@/models";

const useStyles = createStyles((theme) => ({
  inner: {
    height: rem(56),
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },

  linkLabel: {
    marginRight: rem(5),
  },
}));

const links: NavLink[] = [
  {
    link: "/",
    label: "Home",
  },
  {
    link: "/services",
    label: "Services",
    links: [
      {
        link: "/services/bridal",
        label: "Bridal",
      },
      {
        link: "/services/colour",
        label: "Colour",
      },
      {
        link: "/services/cuts",
        label: "Cuts",
      },
    ],
  },
  {
    link: "/gallery",
    label: "Gallery",
  },
  {
    link: "/contact",
    label: "Contact",
  },
];

export function Navbar() {
  const [opened, { toggle }] = useDisclosure(false);
  const { classes } = useStyles();

  const items = links.map((link) => {
    const menuItems = (link.links || []).map((item) => (
      <Menu.Item key={item.link}>{item.label}</Menu.Item>
    ));

    if (menuItems.length > 0) {
      return (
        <Menu
          key={link.label}
          trigger="hover"
          transitionProps={{ exitDuration: 0 }}
          withinPortal
        >
          <Menu.Target>
            <a
              href={link.link}
              className={classes.link}
              onClick={(event) => event.preventDefault()}
            >
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <IconChevronDown size="0.9rem" stroke={1.5} />
              </Center>
            </a>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <a
        key={link.label}
        href={link.link}
        className={classes.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </a>
    );
  });

  const drawerItems = links.flatMap((link) =>
    link.links && link.links.length > 0
      ? [
          <Menu.Item key={link.label}>
            <a href={link.link} className={classes.link}>
              {link.label}
            </a>
          </Menu.Item>,
          ...link.links.map((subLink) => (
            <Menu.Item key={subLink.label}>
              <a href={subLink.link} className={classes.link}>
                {subLink.label}
              </a>
            </Menu.Item>
          )),
        ]
      : [
          <Menu.Item key={link.label}>
            <a href={link.link} className={classes.link}>
              {link.label}
            </a>
          </Menu.Item>,
        ]
  );

  return (
    <Header height={56}>
      <Container>
        <div className={classes.inner}>
          <Text>Hair by Cassie!</Text>
          <Group spacing={10} className={classes.links}>
            {items}
          </Group>
          <Burger
            opened={opened}
            onClick={toggle}
            className={classes.burger}
            size="sm"
          />
        </div>
      </Container>
      <Drawer
        opened={opened}
        onClose={toggle}
        padding="md"
        size="xs"
        position="right"
      >
        <Menu>{drawerItems}</Menu>
      </Drawer>
    </Header>
  );
}
