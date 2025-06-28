const Player = new NativeClass("Terraria", "Player");
const Item = new NativeClass("Terraria", "Item");

if (Player.Update && Player.Update.hook) {
    Player.Update.hook((original, self, i) => {
        original(self, i);

        const vanityHead = self.armor[10];
        const vanityBody = self.armor[11];
        const vanityLegs = self.armor[12];

        // Add defense from vanity slots
        self.statDefense += (vanityHead.defense + vanityBody.defense + vanityLegs.defense);

        // Create item instances
        let headItem = new Item();
        let bodyItem = new Item();
        let legItem = new Item();

        headItem.SetDefaults(vanityHead.type);
        bodyItem.SetDefaults(vanityBody.type);
        legItem.SetDefaults(vanityLegs.type);

        // Apply individual piece effects
        if (vanityHead.type > 0) headItem.UpdateEquip(self);
        if (vanityBody.type > 0) bodyItem.UpdateEquip(self);
        if (vanityLegs.type > 0) legItem.UpdateEquip(self);

        // Apply set bonus if valid
        if (bodyItem.IsArmorSet && bodyItem.IsArmorSet(headItem, legItem)) {
            bodyItem.UpdateArmorSet(self);
        }
    });
}
