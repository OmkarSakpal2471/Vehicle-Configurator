using System;
using System.Collections.Generic;

namespace Vehicle_Configurator.DbRepos;

public partial class ComponentMaster
{
    public int CompId { get; set; }

    public string? CompName { get; set; }

    public string? SubType { get; set; }

    public virtual ICollection<VehicleDetail> VehicleDetails { get; } = new List<VehicleDetail>();
}
