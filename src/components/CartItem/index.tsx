import React from "react";
import * as HoverCard from "@radix-ui/react-hover-card";
import styles from "./styles.module.css";
type CartItemProps = {
    children: React.ReactNode;
    items: { id: number; name: string; price: number,src:string }[];
  };
const CartItem :React.FC<CartItemProps> = ({children,items}) => { 
    console.log({items});
    
    return(   
	<HoverCard.Root>
		<HoverCard.Trigger asChild>
			{children}
		</HoverCard.Trigger>
		<HoverCard.Portal>
			<HoverCard.Content className={styles.HoverCardContent} sideOffset={5}>
				<div style={{ display: "flex", flexDirection: "row", gap: 7 }}>
					<img
						className={styles.Imagelarge}
						src={items?.[0]?.src}
						alt="sneaker"
					/>
					<div style={{ display: "flex", flexDirection: "column", gap: 15 }}>
						<div className={styles.Text}>
                        Discover premium, stylish sneakers designed to elevate every step. Join a community of over 10k sneaker lovers following the latest in quality and comfort.
						</div>
						<div style={{ display: "flex", gap: 15 }}>
							<div style={{ display: "flex", gap: 5 }}>
								<div className="Text bold">0</div>{" "}
								<div className="Text faded">Following</div>
							</div>
							<div style={{ display: "flex", gap: 5 }}>
								<div className={styles.Textbold}>2,900</div>{" "}
								<div className={styles.Textfaded}>Followers</div>
							</div>
						</div>
					</div>
				</div>

				<HoverCard.Arrow className="HoverCardArrow" />
			</HoverCard.Content>
		</HoverCard.Portal>
	</HoverCard.Root>
)};

export default CartItem;
